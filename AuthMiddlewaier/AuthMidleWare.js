const jwt = require("jsonwebtoken");
const securitykey = process.env.SECURITYKEY

const authmiddleLayer = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        const jwtToken = await token.replace("Bearer ", "").trim();

        if (jwtToken == 'null') {
            return res.status(401).send({ message: 'Please firsr login' });
        }
        const checkIsVerified = await jwt.verify(jwtToken, securitykey);
        req.user = checkIsVerified;
        next();

    } catch (er) {
        console.error(er);
        return res.status(500).send({ message: er });
    }
};


module.exports = authmiddleLayer