import React, { useState, useEffect } from 'react';
import Rejectedtable from '../../../components/Rejected/rejected';
import axios from 'axios';



const Rejected = () => {

  const [rejected, setRejected] = useState([]);

  const fetchLeaveData = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/allLeaves/rejected');
      setRejected(response.data); // Update the state with fetched data
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
       <Rejectedtable data={rejected} handleDelete={handleDelete}/>
      </div>
      );
      };

export default Rejected;
