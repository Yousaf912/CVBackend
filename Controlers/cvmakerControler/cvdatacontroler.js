const personalinfoSchema = require("../../Models/Cvmakinginfo/Personalinfo");
const User = require("../../Models/Usersmodel");

const cvDataInfo ={
    personalinfo:async(req,res)=>{
        try{
            const id = req.params.userid;
            const userfind =await User.findById(id)
            if(userfind){
                await User.findByIdAndUpdate(id,{
                    ...userfind._doc,
                    ...req.body
                },{new:true}).then((re)=>{
                    res.status(200).send({data:re})
                })
            }
        }catch(er){throw er}
    }
}

module.exports =cvDataInfo