import leaveReducer from "./leaveReducer";
import  {createContext,useReducer} from "react";



const INITIAL_STATE = {
  leaves:  [],
  isFetching: false,
  error: false,
}


export const LeaveContext = createContext(INITIAL_STATE);

export const LeaveContextProvider = ({children}) =>{

  const [state,dispatch] = useReducer(leaveReducer,INITIAL_STATE);

  


  return (
 
     <LeaveContext.Provider  value={{
  
      leaves:state.leaves,
      isFetching:state.isFetching,
      error:state.error,
      dispatch,

     }}>

    {children}
     </LeaveContext.Provider>

    )


     }




   