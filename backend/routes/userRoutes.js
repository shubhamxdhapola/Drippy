import express from 'express'
import { login, logout, profile, register } from '../controllers/auth.controller.js'
import { authenticateUser } from '../middlewares/authMiddleware.js'

const userRoutes = express.Router()

userRoutes.post('/register', register)
userRoutes.post('/login', login)
userRoutes.post('/logout', logout)
userRoutes.get('/profile', authenticateUser, profile)

export default userRoutes