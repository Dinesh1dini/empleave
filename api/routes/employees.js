import express from "express";

import {
    addemployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
    
}  from "../controllers/employee.js";


import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();


//CREATE
router.post("/",  addemployee);

//UPDATE
router.put("/:id",  updateEmployee);
//DELETE
router.delete("/:id",  deleteEmployee);
//GET
router.get("/", getEmployee);
//GET ALL
//router.get("/countByCity", countByCity);



export default router;
