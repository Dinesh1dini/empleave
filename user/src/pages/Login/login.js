import React, {  useState, useContext } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.css";
import { useNavigate } from "react-router-dom";

  export default function Login() {
    
    const [fName, setName] = useState("");
    const [password, setPassword] = useState("");
    const { isFetching, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
      e.preventDefault();
      login({ fName, password },navigate, dispatch);
    };
  

  return (
    <div className="login">
      <form className="loginForm">
        <input
          type="text"
          placeholder="fName"
          className="loginInput"
          name="username"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="loginInput"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="loginButton"
          onClick={handleLogin}
          disabled={isFetching}
        >
          Login
        </button>
      </form>
    </div>
  );
}




