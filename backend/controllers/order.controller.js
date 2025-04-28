import { Order } from '../models/order.model.js'

export const getMyOrders = async(req, res) => {
    try {
        const orders = await Order.find({ user : req.user._id })
        .sort({ createdAt : -1})

        if(orders.length === 0) {
            return res.status(200).json({message : "No orders found!"})
        }

        res.status(200).json(orders)

    } catch(err) {
        console.log("Error in getMyOrders controller : ", err)
        res.status(500).json({message : "Internal sever error!"})
    }
}

export const getOrderDetails = async(req, res) => {
    try {
        const order = await Order.findById(req.params.id)
        .populate("user" , "name email")

        if(!order) {
            return res.status(400).json({message : "Order not found!"})
        }

        res.status(200).json(order)

    } catch(err) {
        console.log("Error in getOrderDetails controller : ", err)
        res.status(500).json({message : "Internal sever error!"})
    }

}