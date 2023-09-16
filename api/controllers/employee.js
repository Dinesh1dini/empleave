import Employee from "../models/Employee.js";

import bcrypt from "bcryptjs";


export const addemployee = async(req,res,next)=>{

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


  
  export const deleteEmployee = async (req, res, next) => {
    try {
      await Employee.findByIdAndDelete(req.params.id);
      res.status(200).json("Employee has been deleted.");
    } catch (err) {
      next(err);
    }
     };



  export const getEmployee = async (req, res, next) => {
    try {
      const employee = await Employee.find();
      res.status(200).json(employee);
    } catch (err) {
      next(err);
    }
  };



  export const countByCity = async(req,res,next)=>{
   
    const cities = req.query.cities.split(",");

    try{
 
               const list = await Promise.all(
               cities.map((city)=>{
                return Hotel.countDocuments({city:city});
               })  
               )
   


      res.status(200).json(list);

    }catch(err){
      next(err);
    }


  }