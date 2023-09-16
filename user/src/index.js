import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";

import { LeaveContextProvider } from "./context/leavecontext/leaveContext";


ReactDOM.render(
  <React.StrictMode>
           <AuthContextProvider>
           <LeaveContextProvider>
           <App />
           </LeaveContextProvider>
          </AuthContextProvider>

  </React.StrictMode>,
  document.getElementById("root")
);
