const mongoose = require("mongoose");
const express = require("express");
const routing = require('../crudOperations/Routers/routing');

const url = "mongodb+srv://karanamkarthi5:kk5@testing.g2bgesg.mongodb.net/?retryWrites=true/mydb"

const app = express();
app.use(express.json());

mongoose.connect(url,{useNewUrlParser : true})
const con = mongoose.connection;
con.on("open",()=>{console.log("DataBase Connected")});
con.on("error",(err)=>{console.log(err)});

app.use('/',routing);

app.listen(6000,()=>{
    console.log("Server Running")
})

