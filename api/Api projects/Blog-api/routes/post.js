import express from "express";
import {addpost,updatepost,getallpost,deletepost,getposts } from "../controllers/post.js";


const router = express.Router();


router.post("/addPost",addpost)
router.put("/updatePost/:id",updatepost)
router.delete("/deletePost/:id",deletepost)
router.get("/getallPost",getallpost)

router.get("/getposts/:id",getposts)





export default router;