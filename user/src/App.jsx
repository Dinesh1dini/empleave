
import "./app.css"
//import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';

//import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sidebar from "./components/sidebar/Sidebar";

import Newleave from "./pages/leave/newleave";
import Employee from "./pages/employee/employee";
import Login from "./pages/Login/login";
import Leavestatus from "./pages/Leavestaus/leavestatus";




import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";



const App = () => {

  const {user} = useContext(AuthContext);

    return (

  

<Router>
  
    
  {user && <Sidebar />}

    <div className="content" style={{ marginLeft: "280px" }}>
      <Routes>
      <Route path="/" element={  user ? <Newleave /> : <Navigate to="/login" />   } />

        <Route path="/leave" element={  user ? <Newleave /> : <Navigate to="/login" />  } />
        <Route path="/employee" element={ user ?  <Employee />       : <Navigate to="/login" /> } />
        

   <Route path="/leavestatus" element={ user ?  <Leavestatus />       : <Navigate to="/login" /> } />
        



       a    </Routes>
           </div>




           <Routes>
           {!user && (
           <Route path="/login" exact  element={<Login />} />
           )}
           </Routes>
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