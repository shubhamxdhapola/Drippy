import express from 'express'
import { authenticateUser, isAdmin } from '../middlewares/authMiddleware.js'
import { addUser, deleteUser, getUsers, updateUser } from '../controllers/admin.controller.js'

const adminRoutes = express.Router()

adminRoutes.get('/', authenticateUser, isAdmin, getUsers)
adminRoutes.post('/', authenticateUser, isAdmin, addUser)
adminRoutes.put('/:id', authenticateUser, isAdmin, updateUser)
adminRoutes.delete('/:id', authenticateUser, isAdmin, deleteUser)

export default adminRoutes