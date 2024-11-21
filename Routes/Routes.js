const express = require("express");
const AUthControler = require("../Controlers/AuthControler");
const Zodvalidation = require("../ZodMiddleWare/ZodValidationmiddleware");
const SignupZodSchema = require("../Validators/Authvalidators");
const authmiddleLayer = require("../AuthMiddlewaier/AuthMidleWare");
const cvDataInfo = require("../Controlers/cvmakerControler/cvdatacontroler");
const router = express.Router();



router.post('/signup',Zodvalidation(SignupZodSchema), AUthControler.signup);
router.post('/login',AUthControler.login);
router.get('/makeResume',authmiddleLayer, AUthControler.makeresume);
router.put('/userid/:userid',cvDataInfo.addtemplate);
router.put('/personalinfo/:userid',cvDataInfo.personalinfo);
router.put('/education/:userid',cvDataInfo.education);


module.exports =router