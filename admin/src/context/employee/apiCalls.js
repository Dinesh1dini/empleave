import axios from "axios";

import {
    createEmployeeStart,
    createEmployeeFailure,
  createEmployeeSuccess,
  
  deleteListStart,
  deleteListSuccess,
  deleteListFailure,
  
  
  getEmployeeStart,
  getEmployeeSuccess,
  getEmployeeFailure,


  updateListStart,
  updateListSuccess,
  updateListFailure


  
} from "./EmployeeAction";






export const getEmployees = async (dispatch) => {
  dispatch(getEmployeeStart());
  try {
    const res = await axios.get("http://localhost:8800/api/employee", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getEmployeeSuccess(res.data));
    console.log(res.data)
  } catch (err) {
    dispatch(getEmployeeFailure());
  }
  };
  





  export const createEmployee = async (inputs,file, dispatch) => {
    dispatch(createEmployeeStart());
        
       try {
         const res = await axios.post("http://localhost:8800/api/employee", inputs,file, {
             headers: {
         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
        });
      dispatch(createEmployeeSuccess(res.data));
      alert("sucess");
    } catch (err) {
      dispatch(createEmployeeFailure());
      alert("err");

    }
  };




  export const deleteList = async (id, dispatch) => {
    dispatch(deleteListStart());
    try {
      await axios.delete("http://localhost:8800/api/employee/" + id, {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(deleteListSuccess(id));
    } catch (err) {
      dispatch(deleteListFailure());
    }
  };
  





  export const updateList = async (id, updatedData, dispatch) => {
    dispatch(updateListStart());
    try {
        const res = await axios.put("http://localhost:8800/api/employee/" + id, updatedData, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(updateListSuccess(res.data));
        alert("Update success");
    } catch (err) {
        dispatch(updateListFailure());
        alert("Update failed");
    }
};


