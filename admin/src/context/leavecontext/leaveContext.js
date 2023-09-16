import LeaveReducer from "./leaveReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  leavetypes: [],
  isFetching: false,
  error: false,
   };

export const LeavetypeContext = createContext(INITIAL_STATE);

export const LeavetypeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LeaveReducer, INITIAL_STATE);

  return (
    <LeavetypeContext.Provider
      value={{
        leavetypes: state.leavetypes,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </LeavetypeContext.Provider>
  );
};
