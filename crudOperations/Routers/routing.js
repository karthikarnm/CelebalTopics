const express = require("express");
const router = express.Router();
const modelschema = require('../models/modelschema');


router.get('/get/:id',async(req,res)=>{
  try {
    const rout = await modelschema.findById(req.params.id)
    res.json(rout);
    console.log(rout);
  }catch(err){
    res.send(err)
  }
})

router.post('/post',async(req,res)=>{
    const routs = new modelschema({
        name : req.body.name,
        number : req.body.number
    })
    try{
     const dat = await routs.save();
        res.json(dat);
        console.log(dat);
    }
    catch(err){
        console.log(err);
    }
})

module.exports = router;