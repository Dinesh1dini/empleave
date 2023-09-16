import React from 'react';
import { Link,useNavigate  } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {


  const navigate = useNavigate(); // Use useNavigate instead of history

  const handleLogout = () => {
    // Clear user authentication data from local storage
    localStorage.removeItem('user'); // Replace 'authToken' with your authentication token key
    
    // Navigate to the login page or any other desired route
    navigate('/login'); 
  };









  return (
    <div className="sidebar">
      <ul>

        <li>
          <Link to="/">Dashboard</Link>
        </li>
     

        <li className="dropdown">
          <span>Add Leave</span>
          <ul className="dropdown-content">
            <li>
              <Link to="/leave">Add New Leavr</Link>
            </li>
            <li>
              <Link to="/leavestatus">Leave Status</Link>
            </li>
          </ul>
        </li>


        <li>
          <Link to="/login" onClick={handleLogout}>Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
