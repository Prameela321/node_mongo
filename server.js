const express = require('express');
const app = express();
app.listen(5100,()=>{
    console.log("server running on 5100");
})

app.use(express.json());
module.exports = app;