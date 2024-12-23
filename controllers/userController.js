const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

function  userRegister(req,res){
    const  {userName,email,password} = req.body;
    const hashed = bcrypt.hashSync(password, 10)
    console.log("hased",hashed,password);
    const  userRow =  new userModel({
        userName,
        email,
        hashed  
    });


    userModel.findOne({email}).then(data =>{
        if(!data){
           userRow.save().then(user =>{
              if(!user)
               return  res.status(404).json({"message" : "Something went Wrong"});
            return res.status(200).json(user);
           })
        }
        return res.status(200).json({"message" : "User Already Registered"});
    }).catch(err=>{
       return  res.status(500).json({"message" : err.message});
    })

    
}

const login = (req,res)=>{
    const { email,password} = req.body;
    console.log("in requst",email,password);
    userModel.findOne({email}).then(data =>{
        if(!data)
              return  res.status(404).json({"message" : "User not Found"});
        
        const token = jwt.sign({id: data._id},"accessToken",{expiresIn : "1hr"});
        const valid =  bcrypt.compareSync(password,data.password);
        
        if(!valid)
           return  res.status(401).json({"message" : "email or password is in-correct"});
        return res.status(200).json(
          {...data,accessToken : token}
        );
    }).catch(err =>  res.status(500).json({message : err.message}));
}

module.exports = {
    userRegister : userRegister,
    login: login
}