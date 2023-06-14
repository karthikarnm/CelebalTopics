const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },

    number : {
        type : Number,
        required : true
    }
})

module.exports = mongoose.model("modelschema",modelSchema);