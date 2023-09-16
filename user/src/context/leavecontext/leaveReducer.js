const leaveReducer = (state,action) =>{
 
    switch(action.type){
     
      
        case "CREATE_LEAVE_START":
            return {
              ...state,
              isFetching: true,
              error: false,
            };
          case "CREATE_LEAVE_SUCCESS":
            return {
              leaves: [...state.leaves, action.payload],
              isFetching: false,
              error: false,
            };
          case "CREATE_LEAVE_FAILURE":
            return {
              ...state,
              isFetching: false,
              error: true,
            };



       
  
     default :
      return {...state};
  
     }
  
     }
  export default leaveReducer;
  
  