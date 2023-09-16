import express from "express";
import {update,getUser,deleteUser } from "../controllers/user.js";


const router = express.Router();


router.put("/:id", update);
router.delete("/:id", deleteUser);


router.get("/find/:id", getUser);











export default router;