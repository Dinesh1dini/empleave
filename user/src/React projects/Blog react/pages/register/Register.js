
import "./register.css";
import {useState} from "react";
import axios from "axios";


function Register() {

const [username,setUsername] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [error,setError] = useState(false);


const handleSubmit = async(e) =>{
    e.preventDefault();
    setError(false);

   try{

  const res = await axios.post("/auth/signup",{
    username,
    email,
    password,
    });

res.data && window.location.replace("/signin");

 console.log(res.data)

   }catch(err){
    setError(true);
   }
    
   }




return (



<div className="registerlogin">


   <form  className="registerForm" onSubmit={handleSubmit}>


<label for="fname">Username</label>
<input type="text" onChange={(e)=>setUsername(e.target.value)}   placeholder="Your name.."/>



     <label for="lname">Email</label>
     <input type="text"  placeholder="Email  name.."    onChange={(e)=>setEmail(e.target.value)} />



    <label for="lname">Password</label>
    <input type="text"  placeholder="Enter the password.."  onChange={(e)=>setPassword(e.target.value)} />
   
   
    <input className="registerButton" type="submit"  value="Register"/>


    </form>
    
  {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}


</div>




     );
     }

export default Register;
