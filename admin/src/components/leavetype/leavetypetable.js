import React from 'react';
import './leavetypetable.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const TableLeavetype = ({ data,handleDelete }) => {

  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>Leave type Name </th>
          <th>Leave Details </th>
          


        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.ltName}</td>
            <td>{item.ltDetails}</td>
           
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

export default TableLeavetype;
