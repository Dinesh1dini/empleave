import express from "express";
import {login, registeruser } from "../controllers/auth.js";


const router =express.Router();

router.post("/register",registeruser);
router.post("/login",login);


export default router 