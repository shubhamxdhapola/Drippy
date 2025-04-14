import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import 'dotenv/config'

import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import checkoutRoutes from './routes/checkoutRoutes.js'
import { authenticateUser } from './middlewares/authMiddleware.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import subscribeRoutes from './routes/subscribeRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import productAdminRoutes from './routes/productAdminRoutes.js'
import adminOrderRoutes from './routes/adminOrderRoutes.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials : true,}))

// User routes
app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/checkout', authenticateUser, checkoutRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api/subscribe', subscribeRoutes)

// Admin routes
app.use('/api/admin/users', adminRoutes)
app.use('/api/admin/products', productAdminRoutes)
app.use('/api/admin/orders', adminOrderRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
    connectDB()
})
