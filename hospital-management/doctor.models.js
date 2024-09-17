import mongoose from 'mongoose'
const doctorSchema= new mongoose.Schema({
  description:{
    type:String,
    required: true
  },
  name:{
    required: true,
    type:String
  },
  salary:{
    type:String,
    required:true
  },
  qualification:{
    type:String,
    required:true
  },
  experienceInYears:{
    default:0,
    type:Number
  },
  worksInHospitals:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Hospital"
    }
  ],

  },{timestamps:true})

export const Doctor= mongoose.model("Doctor", doctorSchema)