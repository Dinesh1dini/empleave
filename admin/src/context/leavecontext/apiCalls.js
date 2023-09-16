import axios from "axios";

import {
    createLeavetypeStart,
    createLeavetypeFailure,
    createLeavetypeSuccess,
  
  deleteLeavetypeStart,
  deleteLeavetypeSuccess,
  deleteLeavetypeFailure,
  
  
  getLeavetypeStart,
  getLeavetypeSuccess,
  getLeavetypeFailure,


  updateLeavetypeStart,
  updateLeavetypeSuccess,
  updateLeavetypeFailure


  
} from "./leaveActions";






export const getLeavetype = async (dispatch) => {
  dispatch(getLeavetypeStart());
  try {
    const res = await axios.get("http://localhost:8800/api/leave", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getLeavetypeSuccess(res.data));
    //console.log(res.data)
  } catch (err) {
    dispatch(getLeavetypeFailure());
  }
  };
  





  export const createLeavetype = async (inputs, dispatch) => {
    dispatch(createLeavetypeStart());
        
       try {
         const res = await axios.post("http://localhost:8800/api/leave", inputs, {
             headers: {
         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
        });
      dispatch(createLeavetypeSuccess(res.data));
      alert("sucess");
    } catch (err) {
      dispatch(createLeavetypeFailure());
      alert("err");

    }
  };

  export const deleteLeavetype = async (id, dispatch) => {
    dispatch(deleteLeavetypeStart());
    try {
      await axios.delete("http://localhost:8800/api/leave/" + id, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(deleteLeavetypeSuccess(id));
    } catch (err) {
      dispatch(deleteLeavetypeFailure());
    }
  };
  





  export const updateList = async (id, updatedData, dispatch) => {
    dispatch(updateLeavetypeStart());
    try {
        const res = await axios.put("http://localhost:8800/api/employee/" + id, updatedData, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(updateLeavetypeSuccess(res.data));
        alert("Update success");
    } catch (err) {
        dispatch(updateLeavetypeFailure());
        alert("Update failed");
    }
};


