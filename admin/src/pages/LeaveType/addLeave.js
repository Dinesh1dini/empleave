import React, {useContext, useState } from 'react';
import './addleave.css'; // Make sure you have this CSS file for styling
import axios from   "axios"
import { createLeavetype } from "../../context/leavecontext/apiCalls";
import { LeavetypeContext } from "../../context/leavecontext/leaveContext";




const Addleavetype = () => {


    const [inputs, setInputs] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const {dispatch} = useContext(LeavetypeContext);


        const handleInputChange = (e) => {
        setInputs((prev) => {
          return { ...prev, [e.target.name]: e.target.value };
        });
        };

      console.log(inputs);


      
  const handleClick = async (e) => {
    e.preventDefault();


    createLeavetype(inputs,dispatch);


/*

          

*/

      };
    
    



      return (
       
       
        <div className="employee-form-container">

        <h1>Employee Information</h1>

        {successMessage && <div className="success-alert">{successMessage}</div>}

        <form className="employee-form" >

      


          <div className="input-container">

            <label htmlFor="ltName">Leave type Name:</label>
            <input
              type="text"
              id="ltName"
              name="ltName"
              onChange={handleInputChange}
              placeholder="Enter ltName"
            />
          </div>
  



          <div className="input-container">
            <label htmlFor="ltDetails">ltDetails:</label>
            <input
              type="text"
              id="ltDetails"
              name="ltDetails"
             
              onChange={handleInputChange}
              placeholder="Enter ltDetails"
            />
          </div>
  
          {/* Add more input fields here */}
          
        
           <button onClick={handleClick} className="submit-button">
           Submit
          </button>




        </form>
      </div>
  
 
   
      );
      };

export default Addleavetype;
