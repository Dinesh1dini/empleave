import React from 'react';
import './employee.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const TableEmployee = ({ data,handleDelete }) => {

  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>departmentId</th>
          <th>fName  </th>
          <th>lName </th>
          <th>Gender </th>
          <th>phoneNumber </th>


        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.departmentId}</td>
            <td>{item.fName}</td>
            <td>{item.lName}</td>
            <td>{item.gender }</td>
            <td>{item.phoneNumber }</td>




            <td><span><Link to={`/editemployee/${item._id}`}>Edit </Link></span>
            <span>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
            </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableEmployee;
