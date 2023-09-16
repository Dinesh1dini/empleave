import React from 'react';
import './TableComponent.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const TableComponent = ({ data,handleDelete }) => {


   
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
        <h1>Leave Status</h1>
        <tr>
          <th>Employee Name </th>
          <th>LeaveType  </th>
          <th>NumberofDay </th>
          <th> Status</th>


        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.employeeId.fName}</td>
            <td>{item.leaveType}</td>
            <td>{item.numberofDay}</td>

            <td style={{ color: getItemColorByStatus(item.dtStatus) }}>
      {getStatusLabelByStatus(item.dtStatus)}
    </td>           
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
