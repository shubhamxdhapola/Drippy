import { Cart } from "../models/cart.model.js"
import { Checkout } from "../models/checkout.model.js"
import { Order } from "../models/order.model.js"

export const createCheckout = async(req, res) => {
    try {
        const { checkoutItems, shippingAddress, paymentMethod, totalPrice } = req.body

        if(!checkoutItems || checkoutItems.lenght === 0 ) {
            return res.status(400).json({message : "No items in checkout!"})
        }

        const newCheckout = await Checkout.create({
            user : req.user._id,
            checkoutItems : checkoutItems,
            shippingAddress,
            paymentMethod,
            totalPrice,
            paymentStatus : "Pending",
            isPaid : false,
        })

        console.log(`Checkout created for user ${req.user._id}`)
        res.status(201).json(newCheckout)

    } catch(err) {
        console.log("Error in createCheckout controller : ", err)
        res.status(500).json({message : "Internal server error!"})
    }
}

export const updateCheckout = async(req, res) => {
    try {
        const { paymentStatus, paymentDetails } = req.body

        const checkout = await Checkout.findById(req.params.id)

        if(!checkout) {
            return res.status(404).json({message : "Checkout not found"})
        }

        if(paymentStatus === 'paid') {
            checkout.isPaid = true,
            checkout.paymentStatus = paymentStatus,
            checkout.paymentDetails = paymentDetails,
            checkout.paidAt = Date.now(),

            await checkout.save()
            res.status(200).json(checkout)
        } else {
            res.status(400).json({message : "Invalid payment status!"})
        }

    } catch(err) {
        console.log("Error in updateCheckout controller : ", err)
        res.status(500).json({message : "Internal server error!"})
    }
}

export const createOrder = async(req, res) => {
    try {
        const checkout = await Checkout.findById(req.params.id)

        if(!checkout) {
            return res.status(404).json({message : "Checkout not found!"})
        }

        if(checkout.isPaid && !checkout.isFinalized) {

            const finalOrder = await Order.create({
                user : checkout.user,
                orderItems : checkout.checkoutItems,
                shippingAddress : checkout.shippingAddress,
                paymentMethod : checkout.paymentMethod,
                totalPrice : checkout.totalPrice,
                isPaid : true,
                paidAt : checkout.paidAt,
                isDelivered : false,
                paymentStatus : "paid",
                paymentDetails : checkout.paymentDetails
            })

            checkout.isFinalized = true
            checkout.finalizedAt = Date.now()
            
            await checkout.save()

            await Cart.findOneAndDelete({user : checkout.user})
            res.status(200).json(finalOrder)
        } else if(checkout.isFinalized) {
            res.status(400).json({message : "Checkout already finalised!"})
        } else {
            res.status(400).json({message : "Checkout is not paid!"})
        }

    } catch(err) {
        console.log("Error in createOrder controller : ", err)
        res.status(500).json({message : "Internal server error!"})
    }
}