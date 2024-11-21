const mongoose = require('mongoose');
const personalinfoSchema = require('./Cvmakinginfo/Personalinfo');
const educationschema = require('./EducationSchema/educationInfoSchema');
const experienceScema = require('./ExperienceSchema/ExperienceSchema');
const skillSchema = require('./Skillschema/skillschema');


const userModel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    personalinfo:{
        type:[personalinfoSchema],
        required:false,
        default:[]
    },
    education:{
        type:[educationschema],
        required:false,
        default:[]
    },
    experience:{
        type:[experienceScema],
        required:false,
        default:[]
    },
    skills:{
        type:[skillSchema],
        required:false,
        default:[]
    },
    template:{
        type:String,
        required:false
    }
    
})

const User = mongoose.model("users",userModel);
module.exports = User