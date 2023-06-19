import mongoose, { Schema } from "mongoose";


const HotelSchema=new mongoose.Schema({
    name:{
        type:String,
        Required:true
    },
    type:{
        type:String,
        Required:true
    },
    city:{
        type:String,
        Required:true
    },
    adress:{
        type:String,
        Required:true
    },
    distance:{
        type:String,
        Required:true
    },
    photo:{
        type:[String],
    },
    title:{
        type:String,
        Required:true
    },
    desc:{
        type:String,
        Required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5,
    },
    rooms:{
        type:[String],
    },
    cheapestPrice:{
        type:Number,
        Required:true
    },
    feature:{
        type:Boolean,
        default:false
    },
},{
    timestamps:true
})

const  HotelDB = mongoose.model('Hotels',HotelSchema)
export default HotelDB