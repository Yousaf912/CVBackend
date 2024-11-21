const mongose = require("mongoose");

const experienceScema = new mongose.Schema({
    jobtitle:{
        type:String,
        required:true,
    },
    officeaddress:{
        type:String,
        required:true,
    },
    officename:{
        type:String,
        required:true
    },
    startDate:{
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true
    }
})

module.exports = experienceScema