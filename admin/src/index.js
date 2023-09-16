import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { AuthContextProvider } from "./context/authContext/AuthContext";

import { EmployeeContextProvider } from "./context/employee/EmployeeContext";

import {LeavetypeContextProvider} from "./context/leavecontext/leaveContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<AuthContextProvider>
<EmployeeContextProvider>

  <LeavetypeContextProvider>
  <App />

  </LeavetypeContextProvider>

</EmployeeContextProvider>
     </AuthContextProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
