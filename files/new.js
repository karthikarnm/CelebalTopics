
// // BUFFER MODULE
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
//     fs.readFile("index1.html",function(err,data){
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
//     fs.appendFile("index1.txt","hello",function(err,data){
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
//     fs.unlink("index1.txt",function(err,data){
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
//     fs.writeFle("index1.txt","replace",function(err,data){
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
// join = path.join("C:","/Users/karan/nodejs",joinpath,"index1.html")

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

// const readFileAsync = util.promisify(fs.readFile);
// console.log("promisify :");
// readFileAsync("index1.html",'utf-8')
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

// // DEBUG
// const debugLog = util.debuglog('hsi')
// function de(){
//    debugLog("hello");
// }
// process.env.DEBUG = 'hsi';
// console.log(de())

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










