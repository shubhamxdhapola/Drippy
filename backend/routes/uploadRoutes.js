import express from 'express'
import multer from 'multer'
import { rabbitStorage } from '../utils/cloudinaryConfig.js'
import { uploadImage } from '../controllers/upload.controller.js'

const uploadRoutes = express.Router()
const upload = multer({storage : rabbitStorage})

uploadRoutes.post('/', upload.single('image'), uploadImage)

export default uploadRoutes