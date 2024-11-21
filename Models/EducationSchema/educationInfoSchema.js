const mongose = require("mongoose");

const educationschema = new mongose.Schema({
    name:{
        type:String,
        required:true
    },
    instituteName:{
        type:String,
        required:true
    },
    startdate:{
        type:String,
        required:true
    },
    enddate:{
        type:String,
        required:true
    }
   
})

module.exports = educationschema