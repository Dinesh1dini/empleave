import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>


        <li>
        <Link to="/department">Add Department </Link>
        </li>
 
        <li>
        <Link to="/alldepartment">All Department</Link>
        </li>



        <li>
        <Link to="/employee">Employee</Link>
        </li>
        

        <li>
        <Link to="/allemployees">All Employee</Link>
        </li>



        <li>
        <Link to="/leavetype">Add leave </Link>
        </li>
 
        <li>
        <Link to="/allleavetype">Allleavetype</Link>
        </li>


        <li className="dropdown">
          <span>Leave</span>
          <ul className="dropdown-content">
            <li>
              <Link to="/allleaves">Allleaves </Link>
            </li>
            <li>
              <Link to="/pending">Pending Leaves</Link>
            </li>

            <li>
              <Link to="/approved">Aproved Leaves</Link>
            </li>
         
            <li>
              <Link to="/rejected">Rejected Leaves</Link>
            </li>


          </ul>
        </li>



        <li>
          <Link to="/contact">Contact</Link>
         </li>
         </ul>
        </div>
      );
      };

export default Sidebar;
