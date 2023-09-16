import express from "express";

import {
  
    createDepartment,
    updateDepartment,
    getDepartment,
    deleteDepartment,
    getallDepartment
}  from "../controllers/department.js";


import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();


//CREATE
router.post("/",  createDepartment);

//UPDATE
router.put("/:id",  updateDepartment);
//DELETE
router.delete("/:id",  deleteDepartment);
//GET

router.get("/find/:id", getDepartment);
//GET ALL

router.get("/alldepartment", getallDepartment);


//router.get("/countByCity", countByCity);



export default router;
