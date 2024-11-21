const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://PRAMEELA:mongodb@cluster0.opxin.mongodb.net/');
const db = mongoose.connection;
db.on("error",()=>{
    console.log("connection failed");
})

db.on("open",()=>{
    console.log("db connected");
})

module.exports = db;