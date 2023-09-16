import mongoose from "mongoose";

const Newleave = new mongoose.Schema({

        ltName: {
        type: String,
        required: true,
        },
        ltDetails: {
        type: String,
        required: true,
        },
    
        dtStatus: {
        type: Boolean,
        default: false,
        },
     
       },
      { timestamps: true })

      export default mongoose.model("Newleave",Newleave);