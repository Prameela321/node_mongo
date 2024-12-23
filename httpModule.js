const  http = require('http');

const server = http.createServer((req,res)=>{
    console.log("server using http")
})

server.listen(2100,()=>{
    console.log("testing server");
})