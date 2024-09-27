const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const User = mongoose.model("users",userModel);
module.exports = User