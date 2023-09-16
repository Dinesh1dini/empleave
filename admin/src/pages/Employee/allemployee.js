import React, { useContext, useState, useEffect } from 'react';
import TableEmployee from '../../components/employee/employee';
import { EmployeeContext } from "../../context/employee/EmployeeContext";
import { getEmployees } from "../../context/employee/apiCalls";
import axios from 'axios';


import { deleteList } from "../../context/employee/apiCalls";




const Allemployee = () => {

    const { employees, dispatch } = useContext(EmployeeContext);

    useEffect(() => {
        getEmployees(dispatch);
    }, [dispatch]);


    console.log(employees);



  
  

    const handleDelete = (id) => {
        deleteList(id, dispatch);
      };





  return (
    <div className="App">
           <TableEmployee data={employees} handleDelete={handleDelete}/>
   
    </div>
  );
};

export default Allemployee;
