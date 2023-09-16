import React, { useState, useEffect } from 'react';
import Approvedtable from '../../../components/Approved/approved';
import axios from 'axios';



const Approved = () => {

  const [approved, setApproved] = useState([]);

  const fetchLeaveData = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/allLeaves/approved');
      setApproved(response.data); // Update the state with fetched data
    } catch (error) {
      console.error('Error fetching department data:', error);
    }
    };
    
    console.log(fetchLeaveData);



    const handleDelete = async (id) => {
     /*
      try {
        await axios.delete(`http://localhost:8800/api/department/${id}`);
        fetchDepartmentData(); // Refresh data after deletion
      } catch (error) {
        console.error('Error deleting department', error);
      }*/
    };
  
    useEffect(() => {
        fetchLeaveData();
    }, []);

  return (
       <div className="App">
       <Approvedtable data={approved} handleDelete={handleDelete}/>
      </div>
      );
      };

export default Approved;
