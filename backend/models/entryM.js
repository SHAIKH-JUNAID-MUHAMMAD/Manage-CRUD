const mongoose = require("mongoose");

const Entry = mongoose.model("Students", new mongoose.Schema({
    name:{
        type:String
    },
    fname:{
        type:String
    },
    classe:{
        type:Number
    },
    gender:{
        type:String
    }

},{timestamps:true}))

module.exports = Entry