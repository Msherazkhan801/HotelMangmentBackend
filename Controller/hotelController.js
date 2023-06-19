import express  from 'express'
import HotelDB from "../Model/hotelsModel.js"
import { errorHandler } from '../utils/Errorhandler.js'

export const createHotel =async(req,res)=>{   
    try{
        const newHotel = await HotelDB(req.body)
         await newHotel.save()
        res.status(200).json('Hotel Created')
        
    }catch(e){
        res.status(500).json(e)
    }
}

export const updateHotel =async(req,res)=>{  
    const id = req.params.id
    try{
        const hotel = await HotelDB.findByIdAndUpdate(id,{$set:req.body},{new:true})
         res.status(200).json(hotel) 
    }catch(e){
        res.status(500).json(e)
    }
}
export const deleteHotel =async(req,res)=>{  
    const id = req.params.id
    try{
        const hotel = await HotelDB.findByIdAndDelete(id,{$set:req.body},{new:true})
         res.status(200).json('hotel has been deleted')
        
    }catch(e){
        res.status(500).json(e)
    }
}
// get one hotel
export const getHotel =async(req,res)=>{  
    const id = req.params.id
    try{
        const hotel = await HotelDB.findById(id)
         res.status(200).json(hotel)
        
    }catch(e){
        res.status(500).json(e)
    }
}
// get one hotels
export const getHotels =async(req,res,next)=>{  
    try{
        const hotels = await HotelDB.find()
         res.status(200).json(hotels)
        
    }catch(e){
        res.status(500).json(e)
  
    }
}