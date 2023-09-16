import express from "express";

import {
    addleave,leavestatus
    
}  from "../controllers/employee/leave.js";


import { verifyUser } from "../utils/verifyToken.js";


const router = express.Router();


//CREATE
router.post("/",  addleave);
router.get("/leavestatus/:id",  leavestatus);




//router.get("/countByCity", countByCity);



export default router;
