
//import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
//import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./pages/Login/login";


import Dashboard from "./pages/Dashboard/dashboard";

import Department from "./pages/Department/department";
import Alldepartment from "./pages/Department/Alldepartment";
import Editdepartment from "./pages/Department/editdepartment";


import Employee from "./pages/Employee/Employee";
import Allemployee from "./pages/Employee/allemployee";



import Addleavetype from "./pages/LeaveType/addLeave";
import Allleavetype from "./pages/LeaveType/Allleaves";




import Allleaves from "./pages/leave/Allleave/allleaves";
import Pending from "./pages/leave/Allleave/pending";
import Rejected from "./pages/leave/Allleave/rejected";
import Approved from "./pages/leave/Allleave/approved";





import Updateempleave from "./pages/leave/Takeaction/takeaction";




import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";



const App = () => {

  const {user} = useContext(AuthContext);

    return (

    
    <Router>
   
   <Routes>
      <Route path="/login" exact element={ <Login /> } />
      </Routes>
       
      <div className="app">
      
        <Sidebar />
        <div className="content"   style={{ marginLeft: '290px' }} >
        <Routes>

          
        <Route path="/" element={ <Dashboard /> } />

       <Route path="/department" element={ <Department /> } />
       <Route path="/alldepartment" element={ <Alldepartment /> } />
       <Route path="/editdepartment/:id" element={ <Editdepartment /> } />


       <Route path="/employee"  element={ <Employee /> } />
       <Route path="/allemployees"  element={ <Allemployee /> } />



       <Route path="/leavetype"  element={ <Addleavetype /> } />
       <Route path="/allleavetype"  element={ <Allleavetype /> } />

      





       <Route path="/allleaves" element={ <Allleaves /> } />
       <Route path="/leaveaction/:id" element={ <Updateempleave /> } />
       <Route path="/pending" element={ <Pending /> } />
       <Route path="/approved" element={ <Approved /> } />
       <Route path="/rejected" element={ <Rejected /> } />



       


        </Routes>
         
        </div>
      </div>

      
      
    
  </Router>
    
  



  )
};

export default App;


/*


  <Router>
    <Routes>
      <Route path="/" element={user ? <Home /> : <Navigate to="/register" />} />
      <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      {user && (
        <>
          <Route path="/movies" element={<Home type="movie" />} />
          <Route path="/series" element={<Home type="series" />} />
          <Route path="/watch" element={<Watch />} />
        </>
      )}
    </Routes>
  </Router>
*/