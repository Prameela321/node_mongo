const fs = require('fs');
fs.readFile('asyn-await.js','utf8',(err,data)=>{
    console.log(data);
    if(err)
        console.log(err);
});

fs.writeFile('testfile.js','console.log("testing write file")',(err)=>{
    if(err)
        console.log(err)
    console.log('data saved');
})

fs.unlink('testfile.js',(err)=>{
    console.log("testing");
})