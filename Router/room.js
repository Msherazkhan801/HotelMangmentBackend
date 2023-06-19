import express from 'express'

const router=express.Router()

router.get('/',(req,res)=>{
    res.send('this is room rout')
})
export default router