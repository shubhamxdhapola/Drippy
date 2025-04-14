import express from 'express'
import { subscribe } from '../controllers/subscribe.controller.js'
const subscribeRoutes = express.Router()

subscribeRoutes.post('/', subscribe)
export default subscribeRoutes