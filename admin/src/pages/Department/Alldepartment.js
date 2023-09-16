import React, { useState, useEffect } from 'react';
import TableComponent from '../../components/TableComponent/TableComponent';
import axios from 'axios';



const Alldepartment = () => {

  const [departmentData, setDepartmentData] = useState([]);

  const fetchDepartmentData = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/department/alldepartment');
      setDepartmentData(response.data); // Update the state with fetched data
    } catch (error) {
      console.error('Error fetching department data:', error);
    }
    };
    
    console.log(departmentData);



    const handleDelete = async (id) => {
      try {
        await axios.delete(`http://localhost:8800/api/department/${id}`);
        fetchDepartmentData(); // Refresh data after deletion
      } catch (error) {
        console.error('Error deleting department', error);
      }
    };
  
    useEffect(() => {
      fetchDepartmentData();
    }, []);





  return (
    <div className="App">
      <TableComponent data={departmentData} handleDelete={handleDelete}/>
    </div>
  );
};

export default Alldepartment;
