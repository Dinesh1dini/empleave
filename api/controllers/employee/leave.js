import Employee from "../../models/Employee.js";
import Addleave from "../../models/Newleave.js";

export const addleave = async (req, res, next) => {

    const newAddleave = new Addleave({
      ...req.body, // Include other fields from the request body
      userId: req.body.userId,
    });
  
    try {
      const savedAddleave = await newAddleave.save();
      res.status(200).json(savedAddleave);
    } catch (err) {
      next(err);
    }
    };


    
export const leavestatus = async (req, res, next) => {


  const { id } = req.params;
  try {
    // Find the employee by ID and populate the 'addleave' field
    const employee = await Addleave.find({ employeeId: req.params.id })
      .populate({
        path: 'employeeId', // The field to populate
        select: 'fName', // Optional: Specify the fields you want to select from 'addleave'
      })
      .exec();

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }



      res.status(200).json(employee);
   // console.log('Leaves with employee usernames:', leaves);
  } catch (error) {
    console.error('Error fetching leaves:', error);
  }
 }