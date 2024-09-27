const mongoose = require("mongoose");

const personalInfo = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    surname:{
        type:String,
        require:true
    },
    adress:{
        type:String,
        require:true
    },
    postalcode:{
        type:Number,
        require:true
    },
    country:{
        type:String,
        require:true
    },
    number:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    facebook:{
        type:String,
        require:false
    },
    linkedin:{
        type:String,
        require:false
    },
    website:{
        type:String,
        require:false
    }
})

const personalinfoSchema = mongoose.model('personalinfos',personalInfo);
module.exports = personalinfoSchema;