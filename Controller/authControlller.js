import express  from 'express'
import HotelDB from "../Model/hotelsModel.js"
import { errorHandler } from '../utils/Errorhandler.js'
import userDB from '../Model/authModel.js'
import bcrypt from 'bcryptjs'


export const registeUser=async(req,res)=>{
    const {name, email,password}=req.body;
    try{
        const existingUser = await userDB.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: "User already exists" });
        }
    const salt=await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password,salt)
    const newUser= new userDB({name,email,password:hashPassword})
    
        await newUser.save()
        res.status(200).json(newUser)

    }catch(error){
        res.status(500).json(error.message)
    }

}

export const loginUser=async (req,res)=>{
    const {email,password} = req.body
try{

    const user=await userDB.findOne({email:email})
    
    if(user){
        const validity= await bcrypt.compare(password,user.password)
        validity ? res.status(200).json(user):res.status(400).json("something went wrong")
        
        
    }
}catch(error){
    res.status(500).json({massage:error.massage})
}
    
}