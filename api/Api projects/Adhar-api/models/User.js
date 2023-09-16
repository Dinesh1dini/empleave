const mongoose = require("mongoose");

const Userrequest = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
  
    number: {
      type: String,
      required: true,
    },
    servicetype: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    },




  },
  { timestamps: true }
);


module.exports = mongoose.model("User", Userrequest);
