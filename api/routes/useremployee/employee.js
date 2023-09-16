import express from "express";

import {
    updateEmployee,
    userLogin,
   
    
}  from "../../controllers/employee/employee.js";


import { verifyUser } from "../../utils/verifyToken.js";


const router = express.Router();


//CREATE
router.put("/updateemp/:id", verifyUser, updateEmployee);
router.post("/userLogin",  userLogin);





//router.get("/countByCity", countByCity);



export default router;
