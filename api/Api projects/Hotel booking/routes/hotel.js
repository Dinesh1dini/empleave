import express from "express";

import {
    
    
    countByCity,

    createHotel,
    deleteHotel,
    getHotel,  updateHotel,
}  from "../controllers/hotel.js";


import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();


//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET

router.get("/find/:id", getHotel);
//GET ALL


router.get("/countByCity", countByCity);



export default router;
