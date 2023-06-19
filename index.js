import express  from "express"; 
import dotenv from 'dotenv'
import mongoose from "mongoose"
import Auth from './Router/auth.js'
import Room from './Router/room.js'
import Hotel from './Router/hotels.js'
import Users from './Router/user.js'
const app=express()
dotenv.config()

const Connect=async()=>{
    try{        
        await  mongoose.connect(process.env.MONGO_DB)
    }catch(e){
        console.log(e)
    }
}
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
app.use('/api/auth',Auth)
app.use('/api/hotel',Hotel)
app.use('/api/room',Room)
app.use('/api/users',Users)

app.use((err,req,res,next)=>{
    const ErrorStatus=err.status ||500
    const ErrorMassage=err.massage ||'something went worng'
    res.status(ErrorStatus).json({
        success:true,
        status:ErrorStatus,
        massage:ErrorMassage,
        stack:err.stack,

    })
})
const port =process.env.PORT || 8000
app.listen(port,()=>{
    Connect()
    console.log('bookin app DB connected on  '+port)
})

