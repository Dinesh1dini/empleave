const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    catnametitle: {
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
  },
  { timestamps: true }
);


module.exports = mongoose.model("Category", CategorySchema);
