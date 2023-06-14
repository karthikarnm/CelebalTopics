const http = require('http');

const options = {
    hostname:'localhost',
    path:'/user',
    port:8000,
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
      }
}

const userInfo = {
    name:"kartik",
    age:21
}

const req = http.request(options,(res)=>{
    let body = '';
    res.on('data',(chunk)=>{
     body += chunk;
    });
    res.on('end',()=>{
        console.log("data : " , body)
    });
    res.on('error',(err)=>{
        console.log(err);
    })
})
req.write(JSON.stringify(userInfo));
req.end();


// const options = {
//   hostname :'localhost',
//   port : 4000,
//   path : '/',
//   method : 'GET',
//   headers :   {'Content-Type': 'application/json',
//   'Authorization': 'Bearer your-access-token'
// }
// }
// const req = https.request(options,(res)=>{
//     let body = '';
//     res.on('body',(chunks)=>{
//         body += chunks;
//     })
//     res.on('end',()=>{
//         console.log("response data : ",body);
//     })
// })
// req.on("error",(err)=>{
//    console.log(err)
// })
// req.end()