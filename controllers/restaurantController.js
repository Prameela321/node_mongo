const restaurantModel = require('../models/restaurantModel');

function createRestaurant(req,res){
    
    const { displayName,imgId,avgRating,deliveryTime,cuisines,location,offerLine } = req.body;
    const restaurantRow = new restaurantModel({
        displayName,
        imgId,
        avgRating,
        deliveryTime,
        cuisines,
        location,
        offerLine
    });
    
    restaurantRow.save().then((data)=>{
        if(!data)
        res.status(400).json({"message" : "Something Went Wrong"});
        res.status(200).json(data)
    }).catch((err)=>{
        res.status(500).json({"message" : err.message})
    })
    
}

module.exports = {
    createRestaurant : createRestaurant
}

