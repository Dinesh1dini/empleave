import Department from "../models/Department.js";




export const createDepartment = async (req, res, next) => {
    const newDepartment = new Department(req.body);
  
    try {
      const savedDepartment = await newDepartment.save();
      res.status(200).json(savedDepartment);
    } catch (err) {
      next(err);
    }
    };




  export const updateDepartment = async (req, res, next) => {
    try {
      const updatedDepartment = await Department.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedDepartment);
    } catch (err) {
      next(err);
    }
  };


  
  export const deleteDepartment = async (req, res, next) => {
    try {
      await Department.findByIdAndDelete(req.params.id);
      res.status(200).json("Department has been deleted.");
    } catch (err) {
      next(err);
    }
     };



  export const getDepartment = async (req, res, next) => {
    try {
      const department = await Department.findById(req.params.id);
      res.status(200).json(department);
    } catch (err) {
      next(err);
    }
  };



  export const getallDepartment = async (req, res, next) => {
    try {
      const alldepartment = await Department.find();
      res.status(200).json(alldepartment);
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