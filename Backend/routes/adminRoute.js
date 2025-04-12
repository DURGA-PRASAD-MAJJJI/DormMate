import express from 'express'
import { addMember } from '../Controllers/AdminControl'
import upload from '../middleware/multer'

const adminRouter = express.Router()

adminRouter.post('/add-member',upload.single('image'),addMember)
export default adminRouter