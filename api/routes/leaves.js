import express from "express";

import {
    createLeave,
    updateLeave,
    deleteLeave,
    getLeave,
}  from "../controllers/leave.js";


import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();


//CREATE
router.post("/",  createLeave);

//UPDATE
router.put("/:id", verifyAdmin, updateLeave);
//DELETE
router.delete("/:id",  deleteLeave);
//GET

router.get("/", getLeave);
//GET ALL


//router.get("/countByCity", countByCity);



export default router;
