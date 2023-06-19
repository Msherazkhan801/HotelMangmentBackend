import mongoose, { Schema } from "mongoose";


const HotelSchema=new mongoose.Schema({
    name:{
        type:String,
        Required:true,
        unique:true
    },
  
    email:{
        type:String,
        Required:true,
        unique:true

    },
  
    password:{
        type:String,
        Required:true
    },
  isAdmin:{
    type:Boolean,
    default:true
  }
  
},{
    timestamps:true
})

const  userDB = mongoose.model('Users',HotelSchema)
export default userDB