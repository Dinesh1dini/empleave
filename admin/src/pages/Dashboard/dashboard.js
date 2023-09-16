import axios from 'axios';
import React, { useState, useEffect } from 'react';

import "./dashboard.css";


export default function Dashboard() {
    


    const [departmentData, setDepartmentData] = useState([]);


    const [countleavestatus, setCountleavestatus] = useState([]);




    const fetchDepartmentData = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/allLeaves/countemp');
        setDepartmentData(response.data); // Update the state with fetched data
      } catch (error) {
        console.error('Error fetching department data:', error);
      }
      };

     console.log(departmentData)


      useEffect(() => {
        fetchDepartmentData();
      }, []);
  
  










      const fetchDatastatus = async () => {
        try {
          const response = await axios.get('http://localhost:8800/api/allLeaves/countleavestatus');
          setCountleavestatus(response.data); // Update the state with fetched data
        } catch (error) {
          console.error('Error fetching department data:', error);
        }
        };
  
      // console.log(departmentData)

        useEffect(() => {
            fetchDatastatus();
        }, []);
    
    
  
  






 return (
    <div className="login">
     <div class="container">
  <div class="item">
     <h2>Register</h2><br/>
    <h1>{departmentData.count}</h1>
    
     </div>
  <div class="item">

  <h2>Pending Leave</h2><br/>
    <h1>{countleavestatus.countStatus0}</h1>
    
  </div>




    <div class="item">
    <h2>Approved Leave</h2><br/>
    <h1>{countleavestatus.countStatus1}</h1>
    
    
    </div>
    </div> 




    </div>
    );
    }





    