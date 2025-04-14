import express from 'express'
import { authenticateUser, isAdmin } from '../middlewares/authMiddleware.js'
import { deleteOrder, getOrders, updateOrderStatus } from '../controllers/admin.controller.js'

const adminOrderRoutes = express.Router()

adminOrderRoutes.get('/', authenticateUser, isAdmin, getOrders)
adminOrderRoutes.put('/:id', authenticateUser, isAdmin, updateOrderStatus)
adminOrderRoutes.delete('/:id', authenticateUser, isAdmin, deleteOrder)

export default adminOrderRoutes