import mongoose from 'mongoose'
const hospitalSchema= new mongoose.Schema({
  description:{
    type:String,
    required: true
  },
  name:{
    required: true,
    type:String
  },
  addressline1:{
    type:String,
    required:true
  },
  addressline2:{
    type:String,
  },
  city:{
   type:String,
   required:true
  },
  pincode:{
    type:Number,
   required:true
  },
  specialisedIn:[
  {
    type:String
  }
  ]}
,{timestamps:true})

export const Hospital= mongoose.model("Hospital", hospitalSchema)