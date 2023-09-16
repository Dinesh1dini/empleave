


import { useState } from 'react';
import axios from 'axios';
//import { BrowserRouter as Router, Route,Switch, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function App() {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/register', { name, mobileNumber, password });
      
      setMessage('Registration successful');
    } catch (err) {
      setMessage('Failed to register');
    }
  };




  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/send-otp", { mobileNumber });
      setMessage('OTP sent successfully');
    } catch (err) {
      setMessage('Failed to send OTP');
    }

};

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/verify-otp", { mobileNumber, otp });
      setMessage('OTP verified successfully');
    } catch (err) {
      setMessage('Failed to verify OTP');
    }
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/verify-otp">Verify OTP</Link>
            </li>
          </ul>
        </nav>



        <Routes>
          
          

          <Route exact path="/" element={<h1>Welcome to the MERN OTP Verification Example</h1>} />


          <Route path="/register" 
          
          
          element={  <>Register
            <form onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Name"
               
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Mobile Number"
               
                onChange={(e) => setMobileNumber(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Register</button>
            </form>
        
</>
          }/>





          <Route path="/verify-otp"      element={  <>

            <h2>Verify OTP</h2>
            <form onSubmit={handleSendOtp}>
              <input
                type="text"
                placeholder="Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
              <button type="submit">Send OTP</button>
            </form>
            <form onSubmit={handleVerifyOtp}>
              <input
                type="text"
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button type="submit">Verify OTP</button>
            </form>
          </>}/>






          </Routes>






        <p>{message}</p>
      </div>
    </Router>
  );
}

export default App;
