import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import  userRoute    from "./routes/user.js";

import  postRoute    from "./routes/post.js";

import  addCat    from "./routes/category.js";
import multer from 'multer';

import Post from "./models/Post.js";
import path from "path";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);





const app = express();



dotenv.config();
app.use("/images", express.static(path.join(__dirname, "/images")));

/*
const storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, 'uploads/');
   },
   filename: function (req, file, cb) {
     cb(null, file.originalname);
   }
 });
*/



const storage = multer.diskStorage({
   destination: (req, file, cb) => {
     cb(null, "images");
   },
   filename: (req, file, cb) => {
     cb(null, req.body.name);
   },
 });
 
 
 const upload = multer({ storage: storage });
 app.post("/api/upload", upload.single("file"), (req, res) => {
   res.status(200).json("File has been uploaded");
 });

/*
   app.post('/photos', upload.single('photo'), (req, res) => {
      // Handle photo upload logic

      const { filename } = req.file;

      const photo = new Post({
         filename,
         
       });
      
    });

*/

const connect = () =>{

    mongoose
    .connect(process.env.MONGO_URL)
     .then(()=>{

        console.log("Connected to DB");
     })
     .catch((err)=>{
        throw err;
     })
     };

   
    


//middleware
app.use(cookieParser())
app.use(express.json());






app.use("/api/auth", authRoutes);
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);

app.use("/api/cat", addCat);





app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
      success: false,
      status,
      message,
    });
  });
  

  app.listen(8000,()=>{
        connect();
        console.log("connected to Server");
     });


