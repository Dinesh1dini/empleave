
  export const createLeavetypeStart = () => ({
  type: "CREATE_LEAVETYPE_START",
  });

export const createLeavetypeSuccess = (leavetype) => ({
  type: "CREATE_LEAVETYPE_SUCCESS",
  payload: leavetype,
});

export const createLeavetypeFailure = () => ({
  type: "CREATE_LEAVETYPE_FAILURE",
});



export const getLeavetypeStart = () => ({
  type: "GET_LEAVETYPE_START",
});

export const getLeavetypeSuccess = (leavetypes) => ({
  type: "GET_LEAVETYPE_SUCCESS",
  payload: leavetypes,
});

export const getLeavetypeFailure = () => ({
  type: "GET_LEAVETYPE_FAILURE",
});








export const deleteLeavetypeStart = () => ({
  type: "DELETE_LEAVETYPE_START",
});

export const deleteLeavetypeSuccess = (id) => ({
  type: "DELETE_LEAVETYPE_SUCCESS",
  payload: id,
});

export const deleteLeavetypeFailure = () => ({
  type: "DELETE_LEAVETYPE_FAILURE",
});


export const updateLeavetypeStart = () => ({
  type: "UPDATE_LEAVETYPE_START",
});

export const updateLeavetypeSuccess = (updatelist) => ({
  type: "UPDATE_LEAVETYPE_SUCCESS",
  payload: updatelist,
});

export const updateLeavetypeFailure = () => ({
  type: "UPDATE_LEAVETYPE_FAILURE",
});

