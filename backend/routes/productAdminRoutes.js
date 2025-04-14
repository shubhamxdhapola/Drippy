import express from 'express'
import { authenticateUser, isAdmin } from '../middlewares/authMiddleware.js'
import { getProducts } from '../controllers/admin.controller.js'

const productAdminRoutes = express.Router()

productAdminRoutes.get('/', authenticateUser, isAdmin, getProducts)

export default productAdminRoutes