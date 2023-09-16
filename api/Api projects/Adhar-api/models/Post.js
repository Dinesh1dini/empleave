const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema(
  {
    servicetitle: {
      type: String,
      required: true,
    },
  
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    categories: {
      type: Array,
      required: false,
    },




  },
  { timestamps: true }
);


module.exports = mongoose.model("Services", ServiceSchema);
