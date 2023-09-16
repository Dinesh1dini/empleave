import React, { useContext, useState, useEffect } from 'react';
import TableLeavetype from '../../components/leavetype/leavetypetable';

import axios from 'axios';
import { getLeavetype } from "../../context/leavecontext/apiCalls";
import { LeavetypeContext } from "../../context/leavecontext/leaveContext";


import { deleteLeavetype } from "../../context/leavecontext/apiCalls";




const Allleavetype = () => {

    const { leavetypes, dispatch } = useContext(LeavetypeContext);

    useEffect(() => {
      getLeavetype(dispatch);
    }, [dispatch]);


    console.log(leavetypes);



  
  

    const handleDelete = (id) => {
      deleteLeavetype(id, dispatch);
      };





  return (
    <div className="App">
           <TableLeavetype data={leavetypes} handleDelete={handleDelete}/>
   
    </div>
  );
};

export default Allleavetype;
