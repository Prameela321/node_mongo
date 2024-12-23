const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.DB_URL;
mongoose.connect(url);
const db = mongoose.connection;
db.on("error",()=>{
    console.log("connection failed");
})

db.on("open",()=>{
    console.log("db connected");
})

module.exports = db;