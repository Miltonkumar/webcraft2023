const express = require('express')
const router = express.Router()
//const {getalluser,createuser} = require('../controller/usercontroller')
const registerSchema =require('../Models/registerSchema')


router.get('/',(err,res)=>{
    res.render('register')
});


router.post('/register',async(req,res)=>{
    try{
        const {
            username,
            email,
            password
        }= req.body
        const userData = new registerSchema({
            username:username,
            email:email,
            password:password
        })
        userData.save()
        res.render('profile')
    }catch(error){
        res.render('register',{password:'wrong password'})
    }
})
router.post('/login',(req,res)=>{
    const {
        email,
        password
    } =req.body;

    registerSchema.findOne({email:email},(err,result)=>{
        if(email==result.email){
            console.log("sucess")
        }
    })
})



module.exports = router;