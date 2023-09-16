import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
import Employee from "../models/Employee.js";



export const registeruser = async(req,res,next)=>{

try{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password,salt);
 
     const newUser = new User({
        ...req.body,
        password:hash,
     })
 
     await newUser.save();

   res.status(200).send("user Has been created");
  }catch(err){
    next(err);
  }
}


/*

export const login = async (req,res,next) =>{
  try{
  
    const user = await User.findOne({username:req.body.username});
    if(!user){
    return next(createError(404),"user not found");
    }
    const isPasswordCorrect = await bcrypt.compare(
    req.body.password,user.password
    );


    if(!isPasswordCorrect){
    return next(createError(400, "Wrong password or usernae"));
    }

 const token = jwt.sign(
  {id:user._id, isAdmin:user.isAdmin},
   process.env.JWT
 )

  const {password,isAdmin, ...otherDetails} = user._doc;
  res 
  .cookie("access_token", token,{
    httpOnly:true,

})
.status(200)
.json({details:{...otherDetails},isAdmin});
}catch(err){
  next(err);
}
}
*/





export const updateEmployee = async (req, res, next) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedEmployee);
  } catch (err) {
    next(err);
  }
};



  

/*

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return next(createError(404, "User not foundss"));
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return next(createError(400, "Wrong password or username"));
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT // Make sure to provide the correct JWT secret
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
     }catch (err) {
    next(err);
      }
     };



     */

     


  
     export const login = async (req, res, next) => {
      try {
        const user = await User.findOne({ username: req.body.username });
    
        if (!user) {
          return next(createError(404, "User not foundss"));
        }
    
        const isPasswordCorrect = await bcrypt.compare(
          req.body.password,
          user.password
        );
    
        if (!isPasswordCorrect) {
          return next(createError(400, "Wrong password or username"));
        }
    
        const token = jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
          process.env.JWT // Make sure to provide the correct JWT secret
        );
    
        const { password, isAdmin, ...otherDetails } = user._doc;
        res
          .cookie("access_token", token, {
            httpOnly: true,
          })
          .status(200)
          .json({ details: { ...otherDetails }, isAdmin });
      } catch (err) {
        next(err);
      }
    };
  