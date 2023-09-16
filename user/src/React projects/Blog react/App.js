import react from "react";
import TopBar from "./components/topbar/TopBar";
import Write from "./pages/write/Write";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homes from "./pages/homes/Homes";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import Signin from "./pages/signin/Signin";
import { useContext } from "react";

import { Context } from "./context/Context";
import Settings from "./pages/settings/Settings";



function App() {

  const { user } = useContext(Context);


  return (
    <BrowserRouter>
<TopBar />
        <Routes>
         
  

   <Route   path="/" exact element={<Homes />} />
   <Route   path="/register" exact element={<Register />} />


<Route  path="/signin" element={ user ? <Homes /> : <Signin/>  }           />


<Route  path="post/:postId" element={<Single/>}  />

<Route  path="/write" element={<Write/>}  />

<Route path="/settings"   element= {user ? <Settings /> : <Register />} />

            
          
        </Routes>
  </BrowserRouter>
  );
}

export default App;
