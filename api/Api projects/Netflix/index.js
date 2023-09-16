const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const authRoute = require("./routes/auth");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const userRoute = require("./routes/users");


//const cartRoute = require("./routes/category");

const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DBConnection Successfull"))
.catch((err) => {
    console.log(err);
})                       


app.use(cors());
app.use(express.json());

//app.use("/api/carts", cartRoute);
app.use("/api/auth", authRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);
app.use("/api/users", userRoute);


app.listen(5000,()=> {
console.log("Backend server is running!");
})

