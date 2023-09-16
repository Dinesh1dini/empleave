
import "./app.scss"
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
//import { useState } from "react";

//const { user } = useState(true);
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";


const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/register" element={ <Register />} />

      <Route path="/login" element= {!user ? <Login /> : <Navigate to="/" /> } />

      <Route path="/movies" element={ <Home type="movie" /> } />

      <Route path="/series" element={ <Home type="series" /> } />

      
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