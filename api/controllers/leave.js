import Leave from "../models/Leave.js";

export const createLeave = async (req, res, next) => {
    const newLeave = new Leave(req.body);
  
    try {
      const savedLeave = await newLeave.save();
      res.status(200).json(savedLeave);
    } catch (err) {
      next(err);
    }
    };




  export const updateLeave = async (req, res, next) => {
    try {
      const updatedLeave = await Leave.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedLeave);
    } catch (err) {
      next(err);
    }
  };


  
  export const deleteLeave = async (req, res, next) => {
    try {
      await Leave.findByIdAndDelete(req.params.id);
      res.status(200).json("Leave has been deleted.");
    } catch (err) {
      next(err);
    }
     };



  export const getLeave = async (req, res, next) => {
    try {
      const leave = await Leave.find();
      res.status(200).json(leave);
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