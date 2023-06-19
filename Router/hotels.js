import express from 'express'
import { createHotel,updateHotel,deleteHotel, getHotel, getHotels } from '../Controller/hotelController.js'
const router=express.Router()

router.post('/',createHotel)
router.put('/:id',updateHotel)
router.delete('/:id',deleteHotel)
router.get('/:id',getHotel)
router.get('/',getHotels)

export default router