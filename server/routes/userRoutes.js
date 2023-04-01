const express = require('express');
const router = express.Router();
const userSchema = require('../models/userSchema')


//endpoints
 router.get('/', (req, res) => {
    res.render('login')
})


router.post('/register',async(req, res)=>{
    try{
         const {
             username,
             email,
             password,
             //profile,
         }= req.body
         console.log("see ne ")
        console.log(username)
        const userData = new userSchema({
             username:username,
             email:email,
             password:password,
        })
        userData.save()
           

    }catch(error){

    }
})

router.post('/login',async(req, res)=>{
    try{
         const {
            lusername,
            lpassword
         }= req.body;

        console.log(lusername)
        console.log(lpassword)

    }catch(error){

    }
})

module.exports = router;