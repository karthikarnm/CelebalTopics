
// // NODEJS MODULES : BUFFER MODULE
// const buffer = new Buffer.from('karthik');
// const buf = new Buffer.alloc(8);



// buffer.write("hai")
// buf.write("hello")

// console.log(buffer);
// console.log(buffer.toString());
// console.log(buffer.toJSON());


// console.log(buf);
// console.log(buf.toString());



// // HTTP MODULE
// const http  = require ("http");
// http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write("file System");
//     res.end()
// }).listen(8080,(err)=>{
//     if (err) throw err;
//     else console.log("Successfully created")
// })


// // FILE SYSTEM MODULE to READ a file

// const fs = require("fs");
// http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write("file System");
//     fs.readFile("index.html",function(err,data){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         if(err) throw err;
//         res.write(data);
//         console.log("working")
//         return res.end()
//     })
// }).listen(8080,(err)=>{
//     if (err) throw err;
//     else console.log("Successfully created")
// })


// // FILE SYSTEM MODULE to APPEND a file or ADD a file.

// const fs = require("fs");
// http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write("file System");
//     fs.appendFile("index.txt","hello",function(err,data){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         if(err) throw err;
//         res.write(data);
//         console.log("working")
//         return res.end()
//     })
// }).listen(8080,(err)=>{
//     if (err) throw err;
//     else console.log("Successfully created")
// })

// //  FILE SYSTEM MODULE to DELETE a file.

// const fs = require("fs");
// http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write("file System");
//     fs.unlink("index.txt",function(err,data){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         if(err) throw err;
//         res.write(data);
//         console.log("working")
//         return res.end()
//     })
// }).listen(8080,(err)=>{
//     if (err) throw err;
//     else console.log("Successfully created")
// })

// //  FILE SYSTEM MODULE to REPLACE A CONTENT IN FILE a file.

// const fs = require("fs");
// http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write("file System");
//     fs.writeFle("index.txt","replace",function(err,data){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         if(err) throw err;
//         res.write(data);
//         console.log("working")
//         return res.end()
//     })
// }).listen(8080,(err)=>{
//     if (err) throw err;
//     else console.log("Successfully created")
// })

// // URL MODULE 
// const url = require("url");

// const addr = "https://localhost:8080/user/person?name=karthik";
// const add = url.parse(addr,true)

// console.log(add.host);
// console.log(add.pathname);
// console.log(add.search)

// // OS MODULE 
// const os = require("os");

// console.log(os.arch());
// console.log(os.type());
// console.log(os.freemem()/(1024*1024*1024));
// console.log(os.totalmem()/(1024*1024*1024));
// console.log(os.userInfo());
// console.log(os.platform());
// console.log(os.hostname());

// // PATH MODULE
// const path = require("path");

// base=path.basename("index.html");
// dir=path.dirname("test/index.html");
// exact=path.isAbsolute("C:/Users/karan/nodejs/test/index.html");

// let joinpath = "test"
// join = path.join("C:","/Users/karan/nodejs",joinpath,"index.html")

// parse=path.parse("test/index.html");
// exactpath = path.resolve("test/index.html");

// let obj = {dir:"C:/Users/karan",base:"nodejs/test"}
// forma=path.format(obj);

// extension = path.extname("C:/Users/karan/nodejs/test/index.html")

// console.log(base);
// console.log(dir);
// console.log("it shows the file is having the correct path or not : ",exact);
// console.log(join);
// console.log(parse);
// console.log(exactpath);
// console.log(forma);
// console.log(extension);

// // util module FORMAT , PROMISIFY ,inspect
// const util = require("util");
// const fs  = require('fs')

// // FORMAT
// let name = "karthik";
// let num = 41;
// var format = util.format("my num is %d",num);
// var format1 = util.format("my name is %s",name);
// console.log("Format Module :");
// console.log(format);
// console.log(format1);

// // INSPECT 
// let obj= {name:"karthik",num:41}
// console.log("inspect module :",util.inspect(obj))
// //PR0MISIFY
// const readFileAsync = util.promisify(fs.readFile);
// console.log("promisify :");
// readFileAsync("index.html",'utf-8')
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

// // DEBUG
// const debugLog = util.debuglog('hsi')
// function de(){
//    debugLog("hello");
// }
// process.env.DEBUG = 'hsi';
// console.log(de())

// // URL MODULE

// // In Node.js, the url module is a built-in module that provides 
// // utilities for parsing and formatting URLs (Uniform Resource Locators).
// //  It offers a set of functions and classes that make it easier to work with URLs in your Node.js applications.

// // Certainly! Here are some examples demonstrating the usage of the url module in Node.js:

// // URL Parsing
// const url = require('url');

// const urlString = 'https://www.example.com:8080/path?param1=value1&param2=value2';
// const parsedUrl = url.parse(urlString, true);

// console.log(parsedUrl.protocol); // Output: 'https:'
// console.log(parsedUrl.host); // Output: 'www.example.com:8080'
// console.log(parsedUrl.pathname); // Output: '/path'
// console.log(parsedUrl.query); // Output: { param1: 'value1', param2: 'value2' }

// // URL Formatting:
// const url = require('url');

// const urlObject = {
//   protocol: 'https:',
//   host: 'www.example.com',
//   pathname: '/path',
//   query: { param1: 'value1', param2: 'value2' }
// };

// const formattedUrl = url.format(urlObject);
// console.log(formattedUrl); // Output: 'https://www.example.com/path?param1=value1&param2=value2'


// // URL Encoding and Decoding:
// const url = require('url');

// const encodedUrl = 'https%3A%2F%2Fwww.example.com%2Fpath%2Ffile.html';
// const decodedUrl = url.unescape(encodedUrl);

// console.log(decodedUrl); // Output: 'https://www.example.com/path/file.html'

// // URL Validation:
// const url = require('url');

// const validUrl = 'https://www.example.com';
// const invalidUrl = 'example.com';

// console.log(url.isValid(validUrl)); // Output: true
// console.log(url.isValid(invalidUrl)); // Output: false

// // URL Resolving:
// const url = require('url');

// const baseUrl = 'https://www.example.com/path/';
// const relativeUrl = '../file.html';

// const resolvedUrl = url.resolve(baseUrl, relativeUrl);
// console.log(resolvedUrl); // Output: 'https://www.example.com/file.html'

// // CREATING MY OWNMODULE
// const mymodule = require("./mymodule");
// mymodule.newMod("karthik")

// TO IMPORT PACKAGE USING NPM
// npm install package-name
// npm i package-name

// LOCAL PACKAGES:
// Local packages are installed in the specific directory of your Node.js project.
// They are scoped to that project and are not accessible from other projects or globally.
// Local packages are typically dependencies or devDependencies defined in the package.json file of your project.
// npm install <package-name>
//  running npm list --depth=0 in your project's directory will display the list of locally installed packages for that project

// GLOBAL PACKAGES:
// Global packages are installed on your system and can be accessed from any directory or project on your machine.
// To install a package globally, you can use the -g flag:
//  npm install -g <package-name>.
// You can view the list of globally installed packages on your system by running the command
//  npm list -g --depth=0. 

// nodemon: Nodemon is a popular utility that automatically restarts your Node.js application whenever changes are detected in the source code.
//  It is often installed globally to be used across multiple projects.
// node install -g nodemon;
// Once installed, you can run your Node.js application using nodemon instead of the regular node command:
// nodemon app.js 

// // GLOBAL OBJECTS
// // CONSOLE
// console.log("global obj");
// console.error("error");
// console.warn("warn");

// // PROCESS
// console.log("processid",process.pid);
// console.log("process.cwd()",process.cwd());
// console.log("envirorment",process.env)
// process.exit(0);

// // REQUIRE
// const http = require("http");

// // DIRECTORY NAME
// console.log("directory",__dirname);

// // FILENAME
// console.log("filename",__filename);

// // GLOBAL 
// global.variable = "hai hello";
// console.log(global.variable);

// // MODULE
// const mymodule = require('./mymodule');
// console.log(mymodule.add())
// console.log(mymodule.mul())

// // TAKE AN INPUT FROM USER
// // USING READLINE built in module
// const readline = require("readline")
// const input=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// input.question("enter num1",(num)=>{
// console.log("number u enter is" ,num)
  
// })

// // USING PROMPT-sync
// const prompt =require("prompt-sync")();

// const input1=prompt("enter num1 : ");
// const input2=prompt("enter num2 : ");
// console.log("sum",parseInt(input1) + parseInt(input2));

// // COMMAND-LINE ARGUMENT
// const args = process.argv[0];
// const args1 = process.argv[1];
// const args2 = process.argv[2];
// const args3 = process.argv.slice(0);
// const args4 = process.argv.slice(1);
// const args5 = process.argv.slice(2);
// const args6 = process.argv.slice(3);

// console.log("The first element (process.argv[0]) is the path to the Node.js executable:",args);
// console.log("The second element (process.argv[1]) is the path to the executed script:",args1);
// console.log("The remaining elements (process.argv[2] onwards) are the arguments passed by the user:",args2);
// console.log("Slice is used to execute the text and the path to the Node.js executable:",args3);
// console.log("Slice is used to execute the text the path to the executed script:",args4);
// console.log("Slice is used to execute the text and the arguments passed by the user",args5);
// console.log("Slice is used to execute from second argument ",args6)

// // PROVIDE A MULTIPLE ARGUMENTS USING YARGS
// const yargs = require("yargs");

// const argv =yargs.option("name",{
//     type:"string",
//     description:"name of the person",
//     demandOption:true
// }).option("age",{
//     type:"number",
//     description:"age of the person",
//     demandOption:true
// }).option("city",{
//     type:"string",
//     description:"city of the person",
//     demandOption:true
// })
// .help().argv;

// console.log("name : ",argv.name);
// console.log("age :",argv.age);
// console.log("city :",argv.city);

// FILE DIRECTORY
// READFILE DIRECTORY

// const fs = require("fs");
// const dir = "./hei"
// fs.readdir(dir,(err,files)=>{
// if(err) throw err;
// files.map(file=>{
//     console.log(file);
// })

// })

// // fetching api
// fetch('https://jsonplaceholder.typicode.com/todos') 
// .then(res=>res.json())
// .then(json=>console.log(json))  


// fetching specific file using map in json
// const users = [{
//     name:"karthik",
//     age:"22"
// },{
//     name:"karthi",
//     age:"22"
// }];
// users.map((user=>console.log(user.name)));


// JSON 

// const jsonString = '{"name": "John", "age": 30, "email": "john@example.com"}';

// const jsonObject = JSON.parse(jsonString);
// const string = JSON.stringify(jsonString);

// console.log(jsonObject);
// console.log(string);

// const jsonObject = {
//     name: 'John',
//     age: 30,
//     email: 'john@example.com'
//   };
  
//   const jsonString = JSON.stringify(jsonObject); 
//   console.log(jsonString);

// HTTP SERVER AND CLIENT

// const http = require("http");

// http.createServer((req,res)=>{
//   res.writeHead(200,{
//     "Content-Type":"text/html"
//   })
//   res.write ("<h1>hello world</h1>");
//   console.log(req.url)
//   res.write(req.url)
//   res.end();
// }).listen(8080,(err)=>{
//   if(err) throw err;
//   console.log("server is running")
// })

// HTTP CLIENT
// const http = require("http");
// const options = {
//   hostname:"localhost",
//   pathname:'/',
//   port:8080,
//   method:"GET"
// }
// const req = http.request(options,(res)=>{
//   console.log("req successed")
//   console.log(`status code :${res.statusCode}`);

// })
// req.on("err",(err)=>{
//   if(err) throw err;
// })
// req.end();

// SETTING CUSTOM HEADERS
// const options = {
//   hostname:"www.google.com",
//   pathname:"/user",
//   method:"GET",
//   port:"8080",
//   headers:{
//     "Content-Type" : "application/json",
//     "Authorization" : "Bearer token123"
//   }
// };
// const req= http.request(options,(res)=>{
//   console.log(`Status code: ${res.statusCode}`);
//   console.log("header",res.headers);
// })
// req.on("error",(err)=>{
//  if(err) throw err;
// })
// req.end();

// // HTTP CLIENT AND SERVER  USING GET METHOD
// // TO UNDERSTAND THIS SECTION WE HAVE TO CREATE TWO FILES LIKE :
// // SERVER.JS
// // CLIENT.JS

// // SERVER.JS
// const http = require("http");

// const server = http.createServer((req,res)=>{
//   res.setHeader('Content-Type', 'text/plain');
//   res.write("Response from Server")
//   res.end();
// })
// server.listen(8080,(err)=>{
//   if(err) throw err;
//   console.log("Server Running");
// });

// // CLIENT.JS
// const http = require('http');

// const options = {
//     hostname:'localhost',
//     pathname:'/',
//     port:8000,
//     metod:'GET'
// }

// const req = http.request(options,(res)=>{
//     let body = '';
//     res.on("data",(chunk)=>{
//       body += chunk;
//     })
//     res.on("end",()=>{
//         console.log("response is : ",body);

//     })

// })
// req.on("error" ,(err)=>{
//     console.err(err);
// })
// req.end();

// // HTTP CLIENT AND SERVER  USING POST METHOD
// // server.js

// const http = require("http");

// http.createServer((req,res)=>{
//     if (req.method === 'POST' &&  req.url === '/user'){
//         let body = '';
//         req.on("data", (chunk)=>{
//             body += chunk;
//         });
//         req.on('end',()=>{
//             const userInfo = JSON.parse(body);
//             console.log("userdata : ", userInfo);
    
//         res.statusCode=200;
//         res.setHeader('Content-Type','text/plain')
//         res.write("data received")
//         res.end("user data received");
//             });
//     }

//    else{
//     res.statusCode=404;
//     res.setHeader('Content-Type','text/plain')
//     res.end("invalid point");
// }

   
// }).listen(8000,(err)=>{
//     if(err) throw err;
//     console.log("Server Running")
// })

// // CLIENT.JS
// const http = require('http');

// const options = {
//     hostname:'localhost',
//     path:'/user',
//     port:8000,
//     method:'POST',
//     headers: {
//         'Content-Type': 'application/json'
//       }
// }

// const userInfo = {
//     name:"kartik",
//     age:21
// }

// const req = http.request(options,(res)=>{
//     let body = '';
//     res.on('data',(chunk)=>{
//      body += chunk;
//     });
//     res.on('end',()=>{
//         console.log("data : " , body)
//     });
//     res.on('error',(err)=>{
//         console.log(err);
//     })
// })
// req.write(JSON.stringify(userInfo));
// req.end();

// // SENDING AND RECEIVING EVENTS USING EVENT-EMITTERS
// const EventEmitters = require("events");

// // create an instance of the EventEmitter class
// const myemitter = new EventEmitters();

// // Register an event listener
// myemitter.on('greet',(name)=>{
//     console.log(`hello ${name}`);
// });
// myemitter.on('farewell',()=>{
//     console.log("goodbye")
// });

// // emitting an event 
// myemitter.emit('greet' , 'karthik');
// myemitter.emit('farewell');


// // EXPRESS FRAMEWORK

// const express = require('express');
// const app = express();

// app.use(express.json());

// app.get('/users',(req,res)=>{
//     res.send("hello !, from express")
// });


// app.get('/users/:id',(req,res)=>{
//     let userId = req.params.id;
//     res.send(`userid : ${userId}`);
// })
// app.post('/users',(req,res)=>{
//   const user = req.body.name;
//   console.log("data recceived",user);
//   res.send(`response received ${user}`)
// })

// // Serve static files from the 'public' directory
// app.use(express.static('public'));


// app.delete('/users/:name',(req, res) => {
//     const username = req.body.name; // Access the resource identifier from the URL
//     // Delete the user with the provided ID or perform the desired action
//     // e.g., remove user from a database
//     console.log(`Deleting user with ID ${username}`);
//     res.send(`User with ID ${username} deleted successfully`);
//   });

// // Route handler for the '/users/:id' URL with 'PUT' method
// app.put('/users/:id', (req, res) => {
//     const userId = req.params.id; // Access the resource identifier from the URL
//     const updatedUser = req.body; // Access the data sent in the request body
//     // Update the user with the provided ID using the updatedUser data
//     // e.g., update user details in a database
//     console.log(`Updating user with ID ${userId}`);
//     console.log('Updated user:', updatedUser);
//     res.send(`User with ID ${userId} updated successfully`);
//   });


// app.listen(3000,(err)=>{
//     if(err) throw err;
//     console.log("server running")
// })


// // CALL STACK
// function mul(a,b) 
// {return a*b};
// function add(a,b){
//   const sum = mul(a,b);
//   const adder= a+b+sum;
//   console.log("addition",adder)
// }
// function calc(){
//   return  add(2,3);
  
// }
// calc()

// const prompt = require('prompt-sync')();
// const grandfather = (name)=>{ return name};
// const father= (name)=>{
// let names = grandfather(prompt("enter grandfather name"));
// return (`my grandfather name ${names} and my father name is ${name}`);
//  }
//  const son =()=> {let fathername = father(prompt("enter father name"));
//  console.log(fathername);
// }
// son()

// const nation = (name)=>{
//   return name;
// }
// const state = (name)=>{
//   const national =  nation(prompt("enter ur nation"));
//   return `State ${name} nation is ${national}`;
// }
// const dis =(name)=>{
//   const det = state(prompt("enter name of state"))
//   return `my dis is ${name} ${det}`;   
// }
// const main = ()=>{const all = dis(prompt("enteer dis"));
// console.log(all)

// }
// main();

// // CALLBACKS
// function call(callback){
//   setTimeout(()=>{
//     const data = "hey hello";
//     callback(data);
//   },2000);
// }
//  function passing(data){
//     console.log("processing" ,data)
//  }
//  function pro(){
//   console.log("hei")
//  }
// call(passing);
// pro();

// function fetchData(callback) {
//   // Simulating an asynchronous operation
//   setTimeout(() => {
//     const data = "Some fetched data";
//     callback(data);
//   }, 2000);
// }

// function processData(data) {
//   console.log("Processing data:", data);
// }

// fetchData(processData);

// // CALLBACK ABSTRACTION

// function addAsync(a,b,callback){
//   const add = a + b;
//   callback(add);
// }

// function hof(a,b,operator,callback){
//   if(operator === "add")
//   addAsync(a,b,callback)
// }
// hof(5,5,"add",(data)=>{
//   console.log("addition", data)
// })

// // CALLBACK CHAINING
// const timer1 = (callback)=>{
//   setTimeout(()=>{
//     console.log("timer1")
//     callback();
//   })
// }
// const timer2 = (callback)=>{
//   setTimeout(()=>{
//     console.log("timer2");
//     callback()
//   })
// }

// const time = ()=>{
//   console.log("time3");
// }

// timer1(()=>{
//   timer2(()=>{
//     time()
//   });
// });

// // CALLBACKqUEUE
// const add = (a,b,callback)=>{
//  const adder = a+b;
//  callback(adder);
// };
// const cal=(a,b,callback)=>{
//  add(a,b,callback);
// }

// cal(5,5,(adder)=>{
//   console.log(adder)
// });
// cal(6,7,(adder)=>{
//   console.log(adder)
// });

// function call(a,callback){
//   const b = a*a;
//   console.log('called',b);
//   callback(b);
// }
// function calling(a,callback){
//   const c = a*4
//   call(c,callback)
// }
// calling(5,(b)=>{
//   console.log("calling",b)
// })

// function add(a,b){
//   return `Addition ${a+b}`;
// }
// function sub(a,b){
//   return `substract ${a-b}`;
// }

// function total(a,b){
//   const adder = add(a,b);
//   const subr = sub(a,b);
//   return `${adder},${subr}`;
// };
// function sin(a,b){
//   const as =total(a,b)
//   console.log("result : ",as)
// }
// sin(2,3)


// console.log("start");
// function add(){
//   console.log(5*5);
// }
// function sub(){
  
//     console.log(5-5);


 
// }
// function time(){
//     setImmediate(()=>{
//       console.log("immadiate")
//     })
// }

// add(()=>{
//  sub(()=>{
//   time();
//  })
// })


// function stepOne(a,callback) {
//   setTimeout(() => {
//     console.log("Step One", a*a);
//     callback();
//   }, 2000);
// }

// function stepTwo(callback) {
//   setImmediate(() => {
//     console.log("Step Two");
//     callback();
//   });
// }

// function stepThree() {
//   console.log("Step Three");
// }

// stepOne(5,() => {
//   stepThree(() => {
//     stepTwo();
//   });
// });

// function promiseexample(){
//   return new Promise((resolve,reject)=>{
    
//       let a = 3;
//       let b = 2;
//       const c = a+b;
//       resolve(c);
     
//   })
// }
// promiseexample().then((data)=>{
//   console.log(data);
// })
// .catch((err)=>{
//   console.log(err);
// })
// const prompt = require("prompt-sync")();
// function prom(){
//   return new Promise((resolve,reject)=>{
//     const one = prompt("enter one");
//     const two = prompt("enter two");
//     if (one !== 0){
//      resolve(parseInt(one) + parseInt(two));
//     }
//     else{
//       reject(error)
//     }
//   })
// }

// prom().then((data)=>console.log(data))
// .catch((err)=>console.log(err));


// // promise Chaining
// function add(a,b){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve(a+b);
//      },2000);
//   })
// }
// function sub(c,d){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve(c-d);
//      },2000);
//   })
// }

// sub(2,3).then((data)=>{
//   console.log(data);
//   return add(3,3);
// })
// .then((res)=>{ 
//   console.log(res)
// })

// .catch((err)=>console.log(err));


// const request = require("request");

// request.get("https://jsonplaceholder.typicode.com/comments/id",(error,response,body)=>{
//   if (error){
//     console.log(error);
//   }
//   else{
//     // console.log("response", response);
//     console.log(body);
//   }
// })
// const options = {
//   url : 'http://localhost:3000/submit',
//   method:'POST',
//   json:{
//     name:'karthik',
//     email:'karanamkarthi5@gmail.com',
//   },
// };
// request(options,(error,response,body)=>{
//   if (error) {
//     console.error('Error:', error);
//   } else{
//   console.log("response code : ",response.statusCode);
//   // response.send("received")
//   console.log("body",body)
//   }
// })

// function add(a,b,callback){
//   const c = a+b;
  
//   callback(c);
// }
// function hof(a,b,callback){
//   add(a,b,callback);
// }
// hof(2,3,(result)=>{
//   console.log("result" ,result);
// })

// function add(a,b,callback){
//   const c = a+b;
//   console.log(c);
//   callback();
// }
// function sum(a,b,callback){
//   const d = a-b;
//   console.log(d);

// }

// add(2,3,()=>{
//   sum(2,2);
// })

// function prom(a,b){
//   return new Promise((resolve,reject)=>{
//     const c = a+b;
//     resolve(c);
//   })
// }
// // promise chaining
// function prom1(a,b){
//   return new Promise((resolve,reject)=>{
//     const c = a-b;
//     resolve(c);
//   })
// }
// prom(2,3).then((result)=>{
//   console.log(result);
//   return prom1(4,3);
// }).then((data)=>{
//  console.log(data)
// })


// const mongoose = require("mongoose");
// const url = "mongodb+srv://karanamkarthi5:kk5@testing.g2bgesg.mongodb.net/?retryWrites=true&w=majority"

// mongoose.connect(url)
// .then(()=>{
//   console.log("working")
//   console.log(url);
// })
// .catch((err)=>{
//   console.log(err)
// })
// const prompt = require("prompt-sync")();
// const {MongoClient} = require('mongodb');
// const url1 = "mongodb+srv://karanamkarthi5:kk5@testing.g2bgesg.mongodb.net/dbs";

// const client = new MongoClient(url1);
// var db = "mydb"
// async function main(){
//   await client.connect();
//   console.log("Connected ")
//   const dbo = client.db("mydb");
//   const collection = dbo.collection("testing");
//  await dbo.createCollection("testing 2");
//  console.log("collections created")
  // var obj = {
  //   name :prompt("enter name"),
  //   age :prompt("enter age")
  // } 
  
  // const insert = await collection.insertOne(obj);
  // console.log("inserted",insert);
  // const find = await collection.find({}).toArray();
  // console.log("All Documents",find)
  // const findE = await collection.find({name:'karthik karanam'}).toArray();
  // console.log("specific Documents",findE) 
  // const Update = await collection.updateOne({name: prompt("enter old name")},{$set:{name:prompt("enter new name")}})
  // console.log("updated",Update)
  // const delet = collection.deleteMany({name:'karthik karanam'});
  // console.log("deleted",delet)
// }
 

// main()
// .catch(console.error);

// // SEND GRID TO SEND EMAILS
// const sgmail = require('@sendgrid/mail');
//  sgmail.setApiKey('09c987a2a728451d9d2a23fcb0ab5c40')

// const msg = {
//   from :"karanamkarthik9@gmail.com",
//   to : "karanamkarthi5@gmail.com",
//   subject : "TESTING ...",
//   text : "just for testing purpose"
// };
// sgmail.send(msg).then(()=>{
//   console.log("emailSent")
// })
// .then((err)=>{
//   console.log(err)
// })


// // 45. ES6 variables
// //let , const 

// ES6 introduced two new ways of declaring variables: let and const.

// let:

// Variables declared with let can be reassigned a new value.
// They have block scope, meaning they are only accessible within the block where they are defined.
// They are not hoisted to the top of their scope.
// Example:
// javascript
// Copy code
// let x = 5;
// x = 10;
// console.log(x); // Output: 10
// const:

// Variables declared with const are read-only and cannot be reassigned a new value once initialized.
// They also have block scope.
// They are not hoisted to the top of their scope.
// They require an initialization when declared.
// Example:
// javascript
// Copy code
// const PI = 3.14;
// console.log(PI); // Output: 3.14

// PI = 3.14159; // Error: Assignment to constant variable

// if (true) {
//   const name = 'John';
//   console.log(name); // Output: John
// }
// console.log(name); // Error: name is not defined


// if (true) {
//   let y = 20;
//   console.log(y); // Output: 20
// }
// console.log(y); // Error: y is not defined



// // Traditional function expression
// function add(a, b) {
//   return a + b;
// }

// // Arrow function
// const add = (a, b) => a + b;

// //Default Parameters:
// function greet(name = 'Guest') {
//   console.log(`Hello, ${name}!`);
// }

// greet(); // Output: Hello, Guest!
// greet('John'); // Output: Hello, John!

// ); // Output: Hello, John!

// //Rest Parameters:

// function fun(...numbers){
//   return  numbers.reduce((total,num)=>total+num /2);
// }
// console.log(fun(2,3,4,5));
// console.log(fun(2,3,4,56,6,7,8,8))
// function names(name){
//   console.log("hello ",name);
// }
// names("karthik")

// // Destructuring Parameters:
// const func = (name , age , ...rest)=>{
//   console.log(`name:${name}`);
//   console.log(`age:${age}`)
//   console.log(`restobj:${rest}`)
// }

// func("karthik","22","uddehal","bomanahal")

// //SEQUENTIAL EXECUTI0N 

// async function add(a,b){
//   return new Promise((resolve,reject)=>{
//     if (a)
//     setTimeout(() => {
//       const c = a+b;
//       console.log("addition",c);
//       resolve(c);
//     }, 2000);
//     else{
//       reject(error);
//     }
//   })
// }

// async function cal(){
//   const cal1 = await add(2,3);
//   const call2 = await add(cal1,55);
//   console.log("all completed")

// }
// cal()


// // PARALLEL WXECUTION IN ASYNC AND AWAIT 

// async function add(a,b){
//   return new Promise((resolve,reject)=>{
//     if (a)
//     setTimeout(() => {
//       const c = a+b;
//       console.log("addition",c);
//       resolve(c);
//     }, 2000);
//     else{
//       reject(error);
//     }
//   })
// }

// async function cal(){

// const [d1,d2] = await Promise.all([add(2,3),add(22,44)]);
// console.log("all are completed")
// }
// cal()



// const querystring = require('querystring');

// const user = {
//   name:"karthik",
//   age:"22"
// }
// const query = querystring.stringify(user);
// console.log(query)

