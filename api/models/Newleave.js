import mongoose from "mongoose";

const AddleaveScema = new mongoose.Schema({



  
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
  },
    leaveType: {
        type: String,
        required: true,
      },
      numberofDay: {
        type: Number,
        required: true,
      },

      startLeaveDate: {
        type: Date,
        required: true,
      },

      endLeaveDate: {
        type: Date,
        required: true,
      },

    
      dtStatus: {
        type: String,
        default: "0",
      },
     
      leaveDetails: {
        type: String,
        required: true,
      },

     


    },
      { timestamps: true })

      export default mongoose.model("Addleave",AddleaveScema);