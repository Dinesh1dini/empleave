import React, { useState } from 'react';
import './department.css'; // Make sure you have this CSS file for styling
import axios from   "axios"


const Department = () => {


    const [inputs, setInputs] = useState({});
    const [successMessage, setSuccessMessage] = useState('');



    const handleInputChange = (e) => {
        setInputs((prev) => {
          return { ...prev, [e.target.name]: e.target.value };
        });
      };

      console.log(inputs);


      
  const handleClick = async (e) => {
    e.preventDefault();

     
 
 // You can remove the success message after a few seconds if needed

 try {

    const token = JSON.parse(localStorage.getItem("user"))


    const headers = {
        Authorization: `Bearer ${token}`
      };


    const response = await axios.post('http://localhost:8800/api/department', {
      ...inputs,
      dStatus: inputs.dStatus === 'true' ? true : false,
    },{ headers });

    if (response.status === 200) {
      setSuccessMessage('Form submitted successfully');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }
 } catch (error) {
    console.error('Error submitting form:', error);
    // Handle errors here (show error messages, etc.)
      }
      };
    
    



      return (
       
       
        <div className="employee-form-container">

        <h1>Enter Department</h1>

        {successMessage && <div className="success-alert">{successMessage}</div>}

        <form className="employee-form" >

        <div className="input-container">

        <label htmlFor="dName">Department Name:</label>
            <input
              type="text"
              id="dName"
              name="dName"
             // onChange={(e) => setFile(e.target.files[0])}
             onChange={handleInputChange}
              placeholder="Enter dName "
            />
</div>


          <div className="input-container">



            <label htmlFor="dShortName">Department ShortName:</label>
            <input
              type="text"
              id="dShortName"
              name="dShortName"
              onChange={handleInputChange}
              placeholder="Enter first name"
            />
          </div>
  





          <div className="input-container">
            <label htmlFor="dDetails">Department Details:</label>
            <input
              type="text"
              id="dDetails"
              name="dDetails"
              
              onChange={handleInputChange}
              placeholder="Enter last name"
            />
          </div>




         


          <div className="input-container">
          <label htmlFor="dStatus">Department Status:</label>
          <input
            type="radio"
            id="dStatus"
            name="dStatus"
            value="true"
            onChange={handleInputChange}
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

   export default Department;
