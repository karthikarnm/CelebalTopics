const http = require("http");

http.createServer((req,res)=>{
    if (req.method === 'POST' &&  req.url === '/user'){
        let body = '';
        req.on("data", (chunk)=>{
            body += chunk;
        });
        req.on('end',()=>{
            const userInfo = JSON.parse(body);
            console.log("userdata : ", userInfo);
    
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain')
        res.write("data received")
        res.end("user data received");
     
    });
    }

   else{
    res.statusCode=404;
    res.setHeader('Content-Type','text/plain')
    res.end("invalid point");
}

   
}).listen(8000,(err)=>{
    if(err) throw err;
    console.log("Server Running")
})

// http.createServer((req,res)=>{
//     res.write("server started");
//     res.end();
// }).listen(4000,()=>{
//     console.log("Server Started");
// });
