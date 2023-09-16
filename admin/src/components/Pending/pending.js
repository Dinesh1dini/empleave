import React from 'react';
import './pending.css';
import { Link } from 'react-router-dom';

const Pendingstable = ({ data }) => {



    const getItemColorByStatus = (status) => {
        if (status === '0') {
          return 'blue'; // Example color for Waiting Aproved
        } else if (status === '1') {
          return 'green'; // Example color for Approved
        } else {
          return 'red'; // Example color for Rejected
        }
      };
      
      const getStatusLabelByStatus = (status) => {
        if (status === '0') {
          return 'Waiting Approved'; // Label for Waiting Aproved
        } else if (status === '1') {
          return 'Approved'; // Label for Approved
        } else {
          return 'Rejected'; // Label for Rejected
        }
        };




  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>Employee Name </th>
          <th>LeaveType  </th>
          <th>Employee Status</th>
          
          <th> Action</th>


        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
         
            <td>{item.employeeId ? item.employeeId.fName : 'N/A'}</td>
            <td>{item.leaveType}</td>


           
           
            <td style={{ color: getItemColorByStatus(item.dtStatus) }}>
      {getStatusLabelByStatus(item.dtStatus)}
    </td>
            <td><span><Link to={`/leaveaction/${item._id}`}>Take Action </Link></span>
           
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Pendingstable;
