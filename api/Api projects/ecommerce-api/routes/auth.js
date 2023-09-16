const router = require("express").Router();
const User = require("../models/User");

const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");


// REGISTER
router.post("/register", async (req,res)=>{

const newUser = new User({
    username:req.body.username,
    email:req.body.email,
    password:CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
   
  });

  try{
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  }catch (err){
    res.status(500).json(err);
  }
})



//Login 

router.post('/login', async(req,res)=>{
     try{

  const user = await User.findOne(
     {

        username : req.body.username

  }

  );

  if(!user) { return res.status(401).json("user name wrong credentials!");}


  /*
  if (!user) {
    res.json({status: 0, msg: "not found"});
}*/

   /*  if(!user) {
      return res.json(401).send('The user not found');
  }*/


const hashedPassword = CryptoJS.AES.decrypt(
    user.password,
    process.env.PASS_SEC
);

const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

//const inputPassword = req.body.password;

  if(originalPassword !== req.body.password   ){


    return res.status(401).json("Wrong credentialsssss!");

  }





const accessToken = jwt.sign(
    
    {
  id:user._id,
   isAdmin:user.isAdmin,
   },

 process.env.JWT_SEC,
 {expiresIn:"3d"}

);

const {password, ...others} = user._doc;
res.status(200).json({...others, accessToken})

    }

    catch(err){
        res.status(500).json(err);
    }

})



module.exports = router;

