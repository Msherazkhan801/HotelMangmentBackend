import express from 'express'
import { registeUser ,loginUser} from '../Controller/authControlller.js'

const router=express.Router()
router.post('/register',registeUser)
router.post('/login',loginUser)

export default router