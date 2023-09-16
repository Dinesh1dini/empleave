import axios from "axios";
import { leaveStart,leaveSuccess,leaveFailure } from "./leaveActions";


  export const createLeave = async (leave, dispatch) => {

  dispatch(leaveStart());
  try {
    const res = await axios.post("http://localhost:8800/api/newleave", leave);
    console.log(res);
    //if (res.data.isAdmin) {
      dispatch(leaveSuccess(res.data));

    alert("Success");

    //}
    // Navigate to the home page
    //navigate("/");
  } catch (err) {
    dispatch(leaveFailure());
   }
   };