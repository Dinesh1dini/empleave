import React, { useContext, useState, useEffect, useCallback } from 'react';
import TableComponent from '../../components/Table/TableComponent';
import axios from 'axios';
import { AuthContext } from "../../context/authContext/AuthContext";

const Leavestatus = () => {
  const { user } = useContext(AuthContext);
  const [allleaves, setAllleaves] = useState([]);
  const userId = user.details._id;
  const apiUrl = `http://localhost:8800/api/newleave/leavestatus/${userId}`;

  const fetchLeaveData = useCallback(async () => {
    try {
      const response = await axios.get(apiUrl);
      setAllleaves(response.data);

      //console.log(response.data);
    } catch (error) {
      console.error('Error fetching department data:', error);
    }
  }, [apiUrl]);


console.log(allleaves)

  const handleDelete = async (id) => {
    // Implement your delete logic here
  };

  useEffect(() => {
    fetchLeaveData();
  }, [fetchLeaveData]);

  return (
    <div className="App">
      <TableComponent data={allleaves} handleDelete={handleDelete} />
    </div>
  );
};

export default Leavestatus;
