const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose")


const cartRoute = require("./routes/category");
const servicesRoute = require("./routes/post");
const userRoute = require("./routes/user");




const cors = require("cors");




dotenv.config();





mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DBConnection Successfull"))
.catch((err) => {
    console.log(err);
})                       


app.use(cors());
app.use(express.json());

app.use("/api/carts", cartRoute);
app.use("/api/addservices", servicesRoute);
app.use("/api/userrequest", userRoute);






app.listen(5000,()=> {
console.log("Backend server is running!");
})

