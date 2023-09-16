import mongoose from "mongoose";

const DepartmentSchema = new mongoose.Schema({

    dName: {
        type: String,
        required: true,
      },
      dShortName: {
        type: String,
        required: true,
      },
      dDetails: {
        type: String,
        required: true,
      },

      dStatus: {
        type: Boolean,
        default: false,
      },
     
     
      
    },
      { timestamps: true })

      export default mongoose.model("Department",DepartmentSchema);