import mongoose from "mongoose";
const EmployeeSchema = new mongoose.Schema(
     
    {

    profileimg: {
      type: String,
      //required: true,
    },
    departmentId: {
        type: String,
      //  required: true,
    },

    fName: {
        type: String,
        required: true,
    },

    lName: {
        type: String,
        required: true,
    },

    gender: {
        type: String,
        //required: true,
    },
    phoneNumber: {
      type: Number,
      //required: true,
    },
    
    email: {
        type: String,
        required: true,
      },

      password: {
        type: String,
       // required: true,
      },

      roles: {
        type: String,
        required: false,
      },

dateOfBirth:{
    type: Date,
  // required: true,
},


address: {
    type: String,
    required: true,
  },


   


},
  { timestamps: true }
);

export default mongoose.model("Employee", EmployeeSchema);
