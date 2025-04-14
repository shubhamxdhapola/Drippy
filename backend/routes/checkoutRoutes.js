import express from 'express'
import { createCheckout, createOrder, updateCheckout } from '../controllers/checkout.controller.js'

const checkoutRoutes = express.Router()

checkoutRoutes.post('/', createCheckout)
checkoutRoutes.put('/:id/pay', updateCheckout)
checkoutRoutes.post('/:id/finalize', createOrder)

export default checkoutRoutes