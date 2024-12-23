const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const verifyToken = (req,res,next)=>{
    if(req.headers &&
        req.headers.authorization &&
          req.headers.authorization.split(" ")[0] == 'JWT'){
                jwt.verify(
                    req.headers.authorization.split(" ")[1],
                    "accessToken",
                    (err,validToken)=>{
                        // console.log(validToken);
                        if(err)
                            res.status(500).json({message : err.message});

                        userModel.findById(validToken.id).then(data =>{
                            req.user = data;
                            next();
                        }).catch(err =>{
                            res.status(500).json({message : err.message});
                        })
                    }
                )
          }
          else{
            res.status(401).json({"message" : "Unauthorized Access"});
        }
    };

module.exports = verifyToken;