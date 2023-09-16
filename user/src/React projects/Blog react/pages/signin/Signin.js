import "./signin.css";
import {useContext,useRef} from "react";
import axios from "axios";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";




function Login() {


const userRef = useRef();
const passref = useRef();

const {dispatch,isFetching} = useContext(Context);




const handleSubmit = async(e) =>{
    e.preventDefault();
  
    dispatch({type:"LOGIN_START"});
       
          try{
          const res = await axios.post("/auth/signin",{
          username :userRef.current.value,
          password:passref.current.value,
              })
     dispatch({type:"LOGIN_SUCCESS",  payload:res.data});
     

    }catch(err){
        dispatch({type:"LOGIN_FAILURE"});
    }


   }




return (



<div className="login">


   <form  className="registerForm" onSubmit={handleSubmit}>


     <label for="fname">Username</label>
     <input type="text"  ref={userRef}   placeholder="Your name.."/>


     <label for="lname">Password</label>
     <input type="text"  placeholder="Enter the password.." ref={passref}   />
   
    <input className="registerButton" type="submit" disabled={isFetching}  value="login"/>
   
     </form>
     <Link className="link" to="/register">
          Register
        </Link>
     </div>




     );
     }

export default Login;
