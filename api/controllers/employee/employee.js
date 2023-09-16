import Employee from "../../models/Employee.js";
//import User from "../../models/User.js";

import bcrypt from "bcryptjs";
import { createError } from "../../utils/error.js";
import jwt from "jsonwebtoken";



/*
export const updateEmployee = async(req,res,next)=>{

    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);
     
         const newEmployee = new Employee({
            ...req.body,
            password:hash,
         })
     
         await newEmployee.save();
    
       res.status(200).json(newEmployee);
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

  
  export const userLogin = async (req, res, next) => {
    try {
      const employee = await Employee.findOne({ fName: req.body.fName });

      if (!employee) {
        return next(createError(404, "User not foundss"));
      }
  
      const isPasswordCorrect = await bcrypt.compare(
        req.body.password,
        employee.password
      );
  
      if (!isPasswordCorrect) {
        return next(createError(400, "Wrong password or usernamess"));
      }
  
      const token = jwt.sign(
        { id: employee._id },
        process.env.JWT // Make sure to provide the correct JWT secret
      );
  
      const { password,  ...otherDetails } = employee._doc;
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({ details: { ...otherDetails } });
    } catch (err) {
      next(err);
    }
  };




