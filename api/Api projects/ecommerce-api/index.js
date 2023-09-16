const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose")


const cartRoute = require("./routes/cart");


const cors = require("cors");




dotenv.config();





mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DBConnection Successfull"))
.catch((err) => {
    console.log(err);
})                       


app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);



app.listen(5000,()=> {
console.log("Backend server is running!");
})

