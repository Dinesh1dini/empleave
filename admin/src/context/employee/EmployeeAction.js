
export const createEmployeeStart = () => ({
    type: "CREATE_EMPLOYEE_START",
  });
  
  export const createEmployeeSuccess = (employee) => ({
    type: "CREATE_EMPLOYEE_SUCCESS",
    payload: employee,
  });
  
  export const createEmployeeFailure = () => ({
    type: "CREATE_EMPLOYEE_FAILURE",
  });


  
  export const getEmployeeStart = () => ({
    type: "GET_EMPLOYEE_START",
  });
  
  export const getEmployeeSuccess = (employees) => ({
    type: "GET_EMPLOYEE_SUCCESS",
    payload: employees,
  });
  
  export const getEmployeeFailure = () => ({
    type: "GET_EMPLOYEE_FAILURE",
  });
  






  
  export const deleteListStart = () => ({
    type: "DELETE_LIST_START",
  });
  
  export const deleteListSuccess = (id) => ({
    type: "DELETE_LIST_SUCCESS",
    payload: id,
  });
  
  export const deleteListFailure = () => ({
    type: "DELETE_LIST_FAILURE",
  });
  

  export const updateListStart = () => ({
    type: "UPDATE_LIST_START",
  });
  
  export const updateListSuccess = (updatelist) => ({
    type: "UPDATE_LIST_SUCCESS",
    payload: updatelist,
  });
  
  export const updateListFailure = () => ({
    type: "UPDATE_LIST_FAILURE",
  });

