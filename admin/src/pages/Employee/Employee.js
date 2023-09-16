import React, {useContext, useState } from 'react';
import './employee.css'; // Make sure you have this CSS file for styling
import axios from   "axios"
import { createEmployee } from "../../context/employee/apiCalls";
import { EmployeeContext } from "../../context/employee/EmployeeContext";

const Employee = () => {

  const [file, setFile] = useState(null);

    const [inputs, setInputs] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const {dispatch} = useContext(EmployeeContext);


        const handleInputChange = (e) => {
          /*
        setInputs((prev) => {
          return { ...prev, [e.target.name]: e.target.value };
        });*/
 if (e.target.type === 'profileimg') {
    setFile(e.target.files[0]);
  } else {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }




        };

      console.log(file);


      
  const handleClick = async (e) => {
    e.preventDefault();




 // Create a new FormData
 const formData = new FormData();

 // Append the file to the formData
 formData.append('profileimg', file);

 try {
   const response = await axios.post('http://localhost:8800/api/upload', formData, {
     headers: {
       'Content-Type': 'multipart/form-data'
      }
      });

   setSuccessMessage(response.data);
 } catch (error) {
   console.error(error);
 }





    createEmployee(inputs,file,dispatch);


   





      };
    
    



      return (
       
       
        <div className="employee-form-container">

        <h1>Employee Information</h1>

        {successMessage && <div className="success-alert">{successMessage}</div>}

        <form className="employee-form" >

        <div className="input-container">

        <label htmlFor="profile">Profile Name:</label>
            <input
              type="file"
              id="profileimg"
              name="profileimg"
              onChange={(e) => setFile(e.target.files[0])}

              placeholder="Enter Profile "
            />
</div>


          <div className="input-container">



            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="fName"
              onChange={handleInputChange}
              placeholder="Enter first name"
            />
          </div>
  





          <div className="input-container">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lName"
              
              onChange={handleInputChange}
              placeholder="Enter last name"
            />
          </div>





          <div className="input-container">
          <label htmlFor="department">Gender:</label>
          <select
            id="department"
            name="gender"
            
        onChange={handleInputChange}
          >
            <option value="">Select Department</option>
            <option value="mele">Mele</option>
            <option value="femele">Femele</option>
            {/* Add more department options */}
          </select>
          </div>
  

          <div className="input-container">
            <label htmlFor="phoneNumber">phoneNumber:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              
              onChange={handleInputChange}
              placeholder="Enter last name"
            />
          </div>




          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
             
              onChange={handleInputChange}
              placeholder="Enter email"
            />
          </div>


          <div className="input-container">



<label htmlFor="password">Password Name:</label>
<input
  type="text"
  id="firstName"
  name="password"
  
  onChange={handleInputChange}
  placeholder="Enter first name"
/>
</div>


<div className="input-container">
            <label htmlFor="adreess">Role:</label>
            <input
              type="text"
              id="roles"
              name="roles"
              
              onChange={handleInputChange}
              placeholder="Enter last name"
            />
          </div>

        


          <div className="input-container">
            <label htmlFor="dateOfBirth">DateOfBirth:</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              
              onChange={handleInputChange}
              placeholder="Enter last name"
            />
          </div>

          


          <div className="input-container">
            <label htmlFor="adreess">Address:</label>
            <input
              type="text"
              id="adreess"
              name="address"
              
              onChange={handleInputChange}
              placeholder="Enter last name"
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

export default Employee;
