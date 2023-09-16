import React, { useState,useEffect } from 'react';
import './takeaction.css'; // Make sure you have this CSS file for styling
import axios from   "axios"
import { useLocation } from 'react-router-dom';


const Updateempleave = () => {


    const [inputs, setInputs] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const location = useLocation();
    const pathname = location.pathname; // Get the pathname from the location object
    const setEmpleaveId = pathname.substring(pathname.lastIndexOf('/') + 1); // Extract the ID from the pathname

  const [empleave, setEmpleave] = useState({
  numberofDay: '',
  leaveDetails: '',
  dtStatus: '',
   });

  useEffect(() => {
    if (setEmpleaveId) {
      axios.get(`http://localhost:8800/api/allLeaves/oneleaves/${setEmpleaveId}`)
        .then(response => {
            setEmpleave(response.data);
        })
        .catch(error => {
          console.error('Error fetching department data:', error);
        });
    }
  }, [setEmpleaveId]);


console.log(empleave)








    const handleInputChange = (e) => {
        setInputs((prev) => {
          return { ...prev, [e.target.name]: e.target.value };
        });
      };

      console.log(inputs);




  

      
  const handleClick = async (e) => {
   

     
    e.preventDefault();

    try {
      const updatedData = {
        dtStatus: inputs.dtStatus || empleave.dtStatus,
      };

      await axios.put(
        `http://localhost:8800/api/allLeaves/find/${setEmpleaveId}`,
        updatedData
      );

      setSuccessMessage('Updated successfully');
    } catch (error) {
      console.error('Error updating leave:', error);
    }





 // You can remove the success message after a few seconds if needed
  }


      return (
       
       
        <div className="employee-form-container">

        <h1>Edit Department</h1>
        {successMessage && <div className="success-alert">{successMessage}</div>}

        <form className="employee-form" >
        <div className="input-container">
        <label htmlFor="dName">Number of Day :</label>
            <input
              type="number"
              id="numberofDay"
              name="numberofDay"
             // onChange={(e) => setFile(e.target.files[0])}
             value={empleave.numberofDay}
                   />
</div>


          <div className="input-container">
            <label htmlFor="dShortName">Department ShortName:</label>
            <input
              type="text"
              id="dShortName"
              name="dShortName"
              value={empleave.leaveDetails}
              readOnly
             
              
            />
          </div>



          <div className="input-container">
          <label htmlFor="dStatus">Leave Status:</label>
          <select
            id="dStatus"
            name="dtStatus"
            value={inputs.dtStatus || empleave.dtStatus} // Use the input value or state value
            onChange={handleInputChange}
          >
            <option value=" ">Take Action</option>
            <option value="0">Waiting Approved</option>
            <option value="1">Approved</option>
            <option value="2">Rejected</option>
          </select>
        </div>



        
          {/* Add more input fields here */}
        <button onClick={handleClick} className="submit-button">
           Submit
          </button>

        </form>
      </div>
  
 
   
      );
      };

   export default Updateempleave;
