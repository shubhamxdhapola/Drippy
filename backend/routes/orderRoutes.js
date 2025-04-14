import express from 'express'
import { authenticateUser } from '../middlewares/authMiddleware.js'
import { getMyOrders, getOrderDetails } from '../controllers/order.controller.js'

const orderRoutes = express.Router()

orderRoutes.get('/my-orders', authenticateUser, getMyOrders)
orderRoutes.get('/:id', authenticateUser, getOrderDetails)

export default orderRoutes