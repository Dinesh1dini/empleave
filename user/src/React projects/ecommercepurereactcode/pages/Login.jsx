import {useState} from "react";
import {login} from "../redux/apiCalls";
import { useDispatch,useSelector } from "react-redux";



const myStyle = {
        
    backgroundColor: "DodgerBlue",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh"

  };


const Login = () => {

  



const [username,setUsername] = useState("");
const [password,setPassword] = useState("");
const dispatch = useDispatch();
const {isFetching,error} = useSelector((state)=>state.user);


const handleClick = (e) =>{
    e.preventDefault();
login(dispatch,{username,password});
  



}



return (

    <>
    
    <div   >
    <form style={myStyle}>

   <div style={{display:"flex", flexDirection: "column"}}> 
<input type="text" placeholder="username"  onChange={(e) => setUsername(e.target.value)}/> <br/>
<input  type="password"  placeholder="password" onChange={(e)=> setPassword(e.target.value)  }/><br/>
<button onClick={handleClick} disabled={isFetching}>Login</button>

{error && <p>Something went wrong...</p>}

</div>


    </form>

    </div>
    </>



)



}

export default Login;