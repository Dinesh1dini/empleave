import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";


import authRoute from "./routes/auth.js";
import departRoute from "./routes/departments.js";
import leaveRoute from "./routes/leaves.js";
import employeeRoute from "./routes/employees.js";


//Admin status
import allleavrRoute from "./routes/adminstatus/status.js";


// User
import addleaveRoute from "./routes/newleaves.js";
import useremployeeRoute from "./routes/useremployee/employee.js";








import cookieParser from "cookie-parser";
import cors from "cors";



import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';


import multer from 'multer';




import Employee from "./models/Employee.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);








const app = express();
dotenv.config();


app.use(cors());

//const cors = require('cors');



app.use("/images", express.static(path.join(__dirname, "/images")));


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});


const upload = multer({ storage });
app.post("/api/upload", upload.single("profileimg"), (req, res) => {
  res.status(200).json("File has been uploaded");
});




/*
app.post('/api/upload', upload.single('photo'), async (req, res) => {
  try {
    if (!req.file) {
      throw new Error('No file uploaded');
    }

    const { filename } = req.file;

    const employee = new Employee({
      profileimg: filename,
    });

    await employee.save();

    res.status(200).json({ success: true, message: 'File uploaded successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});
*/




















const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
   }
   };

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api/department", departRoute);
app.use("/api/leave", leaveRoute);

app.use("/api/employee", employeeRoute);

//Admin
app.use("/api/allLeaves", allleavrRoute);

// user
app.use("/api/newleave", addleaveRoute);
app.use("/api/useemp", useremployeeRoute);



app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrongss!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});
