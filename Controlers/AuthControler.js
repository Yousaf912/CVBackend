const User = require("../Models/Usersmodel");
const bcrypt = require('bcrypt');
const jwt =require("jsonwebtoken");
const securitykey = process.env.SECURITYKEY

const AUthControler = {
    signup: async(req,res)=>{
        try{
            const checkUserExit =await User.findOne({email:req.body.email})
            if(checkUserExit){
                res.status(400).send({message:"This email is already Registered"})
            }else
            {
                const newpasword =await bcrypt.hash(req.body.password,10);
                const newObj ={
                    ...req.body,
                    password:newpasword
                }
               await User.create(newObj)
               res.status(200).send({message:'Account is Created'})

            }

        }catch(er){console.log(er);
        }
    },
    login: async (req, res) => {
        try {
            const findUser = await User.findOne({ email: req.body.email });
            if (!findUser) {
                res.status(401).send({ message: 'This user is not present with this email' })
                return;
            }
            else {
                const checkPassword = await bcrypt.compare(req.body.password, findUser.password);
                if (!checkPassword) {
                    res.status(401).send({ message: 'Wrong Password' })
                } else {
                    res.status(201).send({
                        token: await jwt.sign({ ...findUser },securitykey)
                    })
                }
            }

        } catch (er) {
            throw er
        }
    },
    makeresume:async(req,res)=>{
        try{
            res.status(200).send({user:req.user})

        }catch(er){throw er}
    }
}

module.exports = AUthControler