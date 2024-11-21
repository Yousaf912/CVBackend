const mongoose = require("mongoose");

const personalinfoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    postalcode:{
        type:Number,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    facebook:{
        type:String,
        required:false
    },
    linkedin:{
        type:String,
        required:false
    },
    website:{
        type:String,
        required:false
    }
})



module.exports = personalinfoSchema;