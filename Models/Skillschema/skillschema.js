const mongose = require("mongoose");

const skillSchema = new mongose.Schema({
    name:{
        type:String,
        required:true
    },
    skillpercent:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true
    }
})

module.exports =skillSchema