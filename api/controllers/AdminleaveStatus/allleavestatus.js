
import Addleave from "../../models/Newleave.js";
import Employee from "../../models/Employee.js";



//ALL leave status
   export const getallempLeave = async (req, res, next) => {
     try {
      const leave = await Addleave.find();
      res.status(200).json(leave);
    } catch (err) {
      next(err);
    }
    };


//Pending
    
   export const getallempPending = async (req, res, next) => {
    try {
      const leave = await Addleave.find({ dtStatus: "0" }).populate({
        path: 'employeeId',
        select: 'fName',
        options: { strictPopulate: false }
      })
      .exec();

      res.status(200).json(leave);
    } catch (err) {
      next(err);
    }
    };


//Aproved 

    export const getallempApproved = async (req, res, next) => {
      try {
        const leave = await Addleave.find({ dtStatus: "1" }).populate({
          path: 'employeeId',
          select: 'fName',
          options: { strictPopulate: false }
        })
        .exec();
       


        res.status(200).json(leave);
      } catch (err) {
        next(err);
      }
      };


//Rejected

      export const getallempRejected = async (req, res, next) => {
        try {
          const leave = await Addleave.find({ dtStatus: "2" }).populate({
            path: 'employeeId',
            select: 'fName',
            options: { strictPopulate: false }
          })
          .exec();

          res.status(200).json(leave);
        } catch (err) {
          next(err);
        }
        };


        
//updateLeave

        export const updateLeave = async (req, res, next) => {
            try {
            const updatedAddleave = await Addleave.findByIdAndUpdate(
              req.params.id,
              { $set: req.body },
              { new: true }
            );
            res.status(200).json(updatedAddleave);
            } catch (err) {
            next(err);
            }
            };
      



   export const allleavestatus = async (req, res, next) => {

      try{
     const leaves = await Addleave.find()
      .populate({
        path: 'employeeId',
        select: 'fName',
        options: { strictPopulate: false }
      })
      .exec();
      res.status(200).json(leaves);
   // console.log('Leaves with employee usernames:', leaves);
  } catch (error) {
    console.error('Error fetching leaves:', error);
  }
 }
   
  
   //Take actions
  
export const oneleavestatus = async (req, res, next) => {
  try {
        const leaves = await Addleave.findById(req.params.id)

      .populate({
        path: 'employeeId',
        select: 'fName',
      })
      .exec();
      res.status(200).json(leaves);
   // console.log('Leaves with employee usernames:', leaves);
  } catch (error) {
    console.error('Error fetching leaves:', error);
  }
 }



 //count
 export const empcount = async (req, res, next) => {

   // const count = await Employee.countDocuments();
     try {
    const count = await Employee.countDocuments();
        res.status(200).json({count});
  } catch (err) {
    next(err);
  }
  }

//leavve status count
/*
  export const countleavestatus = async (req, res, next) => {

    // const count = await Employee.countDocuments();
      try {
     const count = await Addleave.countDocuments({ dtStatus: 0 }
      );
         res.status(200).json({count});
   } catch (err) {
     next(err);
   }
   }*/

   export const countleavestatus = async (req, res, next) => {
    try {
     // const count = await Addleave.countDocuments({ dtStatus: { $in: [0, 1] } });

     const countStatus0 = await Addleave.countDocuments({ dtStatus: 0 });
    const countStatus1 = await Addleave.countDocuments({ dtStatus: 1 });


      res.status(200).json({ countStatus0,countStatus1 });
    } catch (err) {
      next(err);
    }
  };
  