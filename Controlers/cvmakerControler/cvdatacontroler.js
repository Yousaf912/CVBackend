const personalinfoSchema = require("../../Models/Cvmakinginfo/Personalinfo");
const User = require("../../Models/Usersmodel");

const cvDataInfo = {
    addtemplate: async (req, res) => {
        try {
            const id = await req.params.userid;
            const update = await User.updateOne({ _id: id }, {
                $set: { "template": req.body.template }
            })
            res.status(200).send(update)


        } catch (er) { throw er }
    },
    personalinfo: async (req, res) => {
        try {
            const id = req.params.userid;
            const userfind = await User.updateOne({ _id: id }, { $push: { 'personalinfo': req.body } })
            res.status(200).send(userfind)

        } catch (er) { throw er }
    },
    education: async (req, res) => {
        try {
            const id = req.params.userid;
            const user = await User.find({_id:id},{'personalinfo.name':req.body.name});
                const userUpdate = await User.updateOne(
                    { _id: id },
                    { $push: { education: req.body } }
                );
                return res.status(200).send({ message: 'Education added successfully' });
            
        } catch (error) {
            console.error(error);
            return res.status(500).send({ message: 'An error occurred', error });
        }
    }
    
}

module.exports = cvDataInfo