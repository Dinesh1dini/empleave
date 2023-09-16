const router = require("express").Router();
const User = require("../models/User");



router.post("/",  async(req,res)=>{
    const newUser = new User(req.body);
    
    try{
        const savedCart = await newUser.save();
        res.status(200).json(savedCart);
    }catch(err){
        res.status(500).json(err);
    }
    })


    module.exports = router;