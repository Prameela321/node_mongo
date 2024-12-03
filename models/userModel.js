const mongoose = require('mongoose');
const  uniqueValidator =  require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
    userName : {
         type : String,
         required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type: String,
        required : true

    }
});

const userModel = mongoose.model('users',userSchema);

module.exports = userModel;
