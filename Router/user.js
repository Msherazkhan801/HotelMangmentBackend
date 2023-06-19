import express from 'express'

const router=express.Router()

router.get('/',(req,res)=>{
    res.send('this is use rout')
})
export default router