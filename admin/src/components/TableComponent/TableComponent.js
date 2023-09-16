import React from 'react';
import './TableComponent.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const TableComponent = ({ data,handleDelete }) => {

  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>Department Name </th>
          <th>Department ShortName </th>
          <th>Department Details</th>
          <th>Department Status</th>
          <th>Department Action</th>


        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.dName}</td>
            <td>{item.dShortName}</td>
            <td>{item.dDetails}</td>
            <td>{item.dStatus ? 'Active' : 'Inactive'}</td>
            <td><span><Link to={`/editdepartment/${item._id}`}>Edit </Link></span>
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

export default TableComponent;
