import mongoose from "mongoose"



const orderItemSchema= new mongoose.Schema({
productId:{
  type: mongoose.Schema.Types.ObjectId,
  ref:"Product"
},
quantity:{
  type:Number,
  required:true
}

}, {timestamp:true})
const orderSchema= new mongoose.Schema({
orderPrice:
{
  typr:Number,
  required:true
},
customer:{
  type:mongoose.Schema.types.ObjectId,
  ref:"User"
},
orderItems:{
type:[orderItemSchema]
},
 address:{
type:String, 
required:true
},
status:{
  type:String,
  enum:["PENDING", "CANCELLED",'DELIVERED'],
default:"PENDING"

}
}, {timestamp:true})

export const Order= mongoose.model("Order", orderSchema)