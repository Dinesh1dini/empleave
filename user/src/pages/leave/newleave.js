import React,{useContext,useState} from 'react';
import "./newleave.css";
import { createLeave } from "../../context/leavecontext/apiCalls";
import { LeaveContext } from "../../context/leavecontext/leaveContext";



import { AuthContext } from "../../context/authContext/AuthContext";


const Newleave = () => {
  
         const {user} = useContext(AuthContext);

         const [leave, setLeave] = useState(null);



  const {dispatch} = useContext(LeaveContext);


  const handleChange = (e) => {
    const value = e.target.value;
    setLeave({ ...leave, [e.target.name]: value });
     };
    
      //console.log(leave);

const handleSubmit = (e) => {
  e.preventDefault();
    // Include user ID in the leave object
    const updatedLeave = { ...leave, employeeId: user.details._id };


  createLeave(updatedLeave,dispatch);
   
  }




  return (
  

    <div className="new-leave-container">
      <h1>New Leave Application  User name {user.details.fName} </h1>
      <form className="leave-form">


        <label htmlFor="leaveType">Reason for Leave:</label>
        <input type="text" id="leaveType" name="leaveType" className="leave-input"  onChange={handleChange}/>

        <label htmlFor="numberofDay">Number of Days:</label>
        <input type="number" id="numberofDay" name="numberofDay" className="leave-input"   onChange={handleChange}/>

      
        <label htmlFor="startLeaveDate">Start Date:</label>
        <input type="date" id="startLeaveDate" name="startLeaveDate" className="leave-input"  onChange={handleChange} />

        <label htmlFor="endLeaveDate">End Date:</label>
        <input type="date" id="endLeaveDate" name="endLeaveDate" className="leave-input"  onChange={handleChange} />

      
        <label htmlFor="leaveDetails">Additional Comments:</label>
        <textarea id="leaveDetails" name="leaveDetails" rows="4" className="leave-textarea"  onChange={handleChange} />




        <button  className="submit-button" onClick={handleSubmit}>
            Create
          </button>
      </form>

    </div>
  );
};

export default Newleave;
