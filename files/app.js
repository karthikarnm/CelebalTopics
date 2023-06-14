const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/about',(req,res)=>{
    res.send("hhai");
})
app.get('/form',(req,res)=>{
    const filePath = __dirname + '/public/form.html';
    res.sendFile(filePath);
})
app.post('/submit',(req,res)=>{
    const name = req.body.name;
    const phone = req.body.phone;
    const age = req.body.name;
    
    res.send("data received",{name},{phone},{age});
    console.log("data received",{name},{phone},{age})
    
})


app.listen(3000,()=>{
    console.log("Server Running ...")
})