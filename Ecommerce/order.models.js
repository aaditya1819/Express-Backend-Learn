import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true,
        default:0
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    orderItems:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"OrderItem",
            required:true
        }
    ],
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING"
    }
    
},{timestamps:true})

export const Order = mongoose.model("Order", orderSchema);