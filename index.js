require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const  router = require("./Routes/Routes");
const cors =require("cors")
const App = express();
const port = process.env.PORT;
const mongourl =process.env.MONGOURL;


let corsOptions = {
    origin:'http://localhost:5173',
    methods:'GET,POST,PUT,DELETE',
    allowedHeaders: [
        "Content-Type",            
        "Authorization",           
        "X-Requested-With",       
        "Accept",                
        "Access-Control-Allow-Origin", 
        "application/javascript",  
      ],         
      preflightContinue: true,  
    credentials:true,
}
App.use(cors(corsOptions))
App.use(express.json());
App.use('/',router)


App.listen(port,()=>{
    console.log(`server is running on ${port}`);
    mongoose.connect(mongourl).then(()=>{
        console.log('mongoDb is connacted');
    }).catch((er)=>{
        console.log(er);
        
    })
})