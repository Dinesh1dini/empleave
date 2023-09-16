import axios from "axios";
import { loginFailure,loginStart,loginSuccess } from "./AuthActions";


  export const login = async (user,navigate, dispatch) => {

  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:8800/api/auth/login", user);
    console.log(res);

   // document.cookie = `token=${res.data.token}; Secure; HttpOnly; SameSite=None; Max-Age=3600`;

    
    if (res.data.isAdmin) {
      dispatch(loginSuccess(res.data));
    }
    // Navigate to the home page
    navigate("/");
  } catch (err) {
    dispatch(loginFailure());
  }
};