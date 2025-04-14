import express from 'express'
import { authenticateUser } from '../middlewares/authMiddleware.js'
import { addItemToCart, deleteCartItem, getCartItems, mergeGuestCartWithUserCart, updateCartItem } from '../controllers/cart.controller.js'

const cartRoutes = express.Router()

cartRoutes.get('/', getCartItems)
cartRoutes.post('/', addItemToCart )
cartRoutes.put('/', updateCartItem)
cartRoutes.delete('/', deleteCartItem)
cartRoutes.post('/merge', authenticateUser, mergeGuestCartWithUserCart)

export default cartRoutes