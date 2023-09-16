import React, { useState,useEffect } from 'react';
import './department.css'; // Make sure you have this CSS file for styling
import axios from   "axios"
import { useLocation } from 'react-router-dom';


const Editdepartment = () => {


    const [inputs, setInputs] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const location = useLocation();
    const pathname = location.pathname; // Get the pathname from the location object
    const departmentId = pathname.substring(pathname.lastIndexOf('/') + 1); // Extract the ID from the pathname

  const [department, setDepartment] = useState({dName: '',
  dShortName: '',
  dDetails: '',
  dStatus: false, });

  useEffect(() => {
    if (departmentId) {
      axios.get(`http://localhost:8800/api/department/find/${departmentId}`)
        .then(response => {
          setDepartment(response.data);
        })
        .catch(error => {
          console.error('Error fetching department data:', error);
        });
    }
  }, [departmentId]);


//console.log(department)








    const handleInputChange = (e) => {
        setInputs((prev) => {
          return { ...prev, [e.target.name]: e.target.value };
        });
      };

      console.log(inputs);




      const handleRadioChange = () => {
        setDepartment(prevDepartment => ({
          ...prevDepartment,
          dStatus: !prevDepartment.dStatus, // Toggle the status
        }));
      };



      
  const handleClick = async (e) => {
    e.preventDefault();

     
    try {
        const updatedData = {
          dName: inputs.dName || department.dName,
          dShortName: inputs.dShortName || department.dShortName,
          dDetails: inputs.dDetails || department.dDetails,
          dStatus: department.dStatus,
        };
    
        await axios.put(`http://localhost:8800/api/department/${departmentId}`, updatedData);
    
        setSuccessMessage('Department updated successfully');
      } catch (error) {
        console.error('Error updating department:', error);
      }
 // You can remove the success message after a few seconds if needed


    
  }

 


  






      return (
       
       
        <div className="employee-form-container">

        <h1>Edit Department</h1>

        {successMessage && <div className="success-alert">{successMessage}</div>}

        <form className="employee-form" >

        <div className="input-container">

        <label htmlFor="dName">Department Name:</label>
            <input
              type="text"
              id="dName"
              name="dName"
             // onChange={(e) => setFile(e.target.files[0])}
             placeholder={department.dName}
             onChange={handleInputChange}
              
            />
</div>


          <div className="input-container">
            <label htmlFor="dShortName">Department ShortName:</label>
            <input
              type="text"
              id="dShortName"
              name="dShortName"
            
              placeholder={department.dShortName}
              onChange={handleInputChange}
              
            />
          </div>
  





          <div className="input-container">
            <label htmlFor="dDetails">Department Details:</label>
            <input
              type="text"
              id="dDetails"
              name="dDetails"
              placeholder={department.dDetails}
              onChange={handleInputChange}
              
            />
          </div>




         


          <div className="input-container">
          <label htmlFor="dStatus">Department Status:</label>
          <input
            type="radio"
            id="dStatus"
            name="dStatus"
            value={department.dStatus ? "true" : ""} // Convert boolean to string
            checked={department.dStatus}
            
            onChange={handleRadioChange}
           
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

   export default Editdepartment;
