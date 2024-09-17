import mongoose from 'mongoose'
const patientSchema= new mongoose.Schema({
  description:{
    type:String,
    required: true
  },
  name:{
    required: true,
    type:String
  },
 diagnosedWith:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  },
 bloodGroup:{
    type:String,
    required:true
  },
  gender:{
    type:String,
    enum:["M","F","O"],
    default:"M",
    required:true
  },
  admittedIn:{
type:mongoose.Schema.Types.ObjectId,
ref:"Hospital"
  }
  },{timestamps:true})

export const Patient= mongoose.model("Patient", patientSchema)