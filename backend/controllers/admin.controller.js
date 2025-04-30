import User from "../models/user.model.js"
import Product from '../models/product.model.js'
import { Order } from "../models/order.model.js"

export const getUsers = async(req, res) => {
    try {
        
        const users = await User.find({}).select('-password')
        if(users.length === 0) {
            return res.status(404).json({message : "No users found!"})
        }

        res.status(200).json(users)

    } catch(err) {
        console.log("Error in getUsers controller : ", err) 
        res.status(500).json({message : "Internal server error!"})
    }
}

export const addUser = async(req, res) => {
    try {
        const { name, email, password, role } = req.body

        if(!name || !email || !password) {
            return res.status(400).json({message : "All fields are required!"})
        }
        
        const user = await User.findOne({email})
        if(user) {
            return res.status(400).json({message : "User already exists!"})
        }

        const newUser = await User.create({
            name, email, password, 
            role : role || 'customer'
        })

        if(newUser) {
            res.status(201).json({user : newUser, message : "User created successfully!"})
        } else {
            res.status(500).json({message : "Something went wrong, Try again!"})
        }

    } catch(err) {
        console.log("Error in addUser controller : ", err) 
        res.status(500).json({message : "Internal server error!"})
    }
}

export const updateUser = async(req, res) => {
    try {
        const userId = req.params.id
        const updates = req.body

        const user = await User.findById(userId)
        if(!user) {
            return res.status(404).json({message : "No user found!"})
        }

        const updatedUser = await User.findByIdAndUpdate(userId, updates, {
            new : true,
            runValidators : true
        })

        if(updatedUser) {
            res.status(200).json({user : updatedUser, message : "User updated successfully!"})
        } else {
            res.status(500).json({message : "Something went wrong, Try again!"})
        }

    } catch(err) {
        console.log("Error in updateUser controller : ", err) 
        res.status(500).json({message : "Internal server error!"})
    }
}

export const deleteUser = async(req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findById(userId)

        if(user) {
            await user.deleteOne()
            res.status(200).json({message : "User deleted successfully"})
        } else {
            res.status(404).json({message : "User not found!"})
        }
        
    } catch(err) {
        console.log("Error in deleteUser controller : ", err)
        res.status(500).json({message : "Internal server error!"})
    }
}

export const getProducts = async(req, res) => {
    try {
        const products = await Product.find({})
        if(products.length === 0) {
            return res.status(404).json({message : "No products found!"})
        }

        res.status(200).json(products)

    } catch(err) {
        console.log("Error in getProducts controller : ", err)
        res.status(500).json({message : "Internal server error!"})
    }
}

export const getOrders = async(req, res) => {
    try {
        const orders = await Order.find({}).populate('user', 'name email')

        if(orders.length === 0) {
            return res.status(200).json({message : "No orders found!"})
        }

        res.status(200).json(orders)

    } catch(err) {
        console.log("Error in getOrders controller : ", err)
        res.status(500).json({message : "Internal server error!"})
    }
}

export const updateOrderStatus = async(req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('user', 'name')
        if(order) {
            order.status = req.body.status || order.status
            order.isDelivered = 
                req.body.status === "Delivered" ? true : order.isDelivered
            order.deliveredAt =
                req.body.status == "Delivered" ? Date.now() : order.deliveredAt

            const updatedOrder = await order.save()
            res.status(201).json(updatedOrder)
        } else {
            res.status(404).json({message : "Order not found!"})
        }

    } catch(err) {
        console.log("Error in updateOrderStatus controller : ", err)
        res.status(500).json({message : "Internal server error!"})
    }
}

export const deleteOrder = async(req, res) => {
    try {
        const order = await Order.findById(req.params.id)
        if(order) {
            await order.deleteOne()
            res.status(200).json({message : "Order deleted!"})
           
        } else {
            res.status(404).json({message : "Order not found!"})
        }

    } catch(err) {
        console.log("Error in deleteOrder controller : ", err)
        res.status(500).json({message : "Internal server error!"})
    }
}