import express from "express";
import {addcategory,getcat} from "../controllers/categories.js";


const router = express.Router();


router.post("/addCat",addcategory)
router.get("/getcat",getcat)



export default router;