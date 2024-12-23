const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5100;

const app = express();
app.listen(port,()=>{
    console.log("server running on 5100");
})

app.use(express.json());
app.use(cors());
module.exports = app;