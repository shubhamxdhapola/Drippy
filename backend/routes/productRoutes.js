import express from 'express'
import { authenticateUser, isAdmin } from '../middlewares/authMiddleware.js'
import { bestSeller, createProduct, deleteProduct, getProduct, getProducts, newArrivals, similarProducts, updateProduct } from '../controllers/product.controller.js'

const productRoutes = express.Router()

// Public Routes
productRoutes.get('/', getProducts)
productRoutes.get('/best-seller', bestSeller)
productRoutes.get('/new-arrivals', newArrivals)
productRoutes.get('/:id', getProduct)
productRoutes.get('/similar/:id', similarProducts)

// Private/Admin Routes
productRoutes.post('/', authenticateUser, isAdmin, createProduct)
productRoutes.put('/:id', authenticateUser, isAdmin, updateProduct)
productRoutes.delete('/:id', authenticateUser, isAdmin, deleteProduct)

export default productRoutes