import { Cart } from "../models/cart.model.js"
import Product from "../models/product.model.js"

// Helper function to get a cart by user ID or guest ID
const getCart = async (userId, guestId) => {
    if(userId) {
        return await Cart.findOne({user : userId})
    } else if(guestId) {
        return await Cart.findOne({guestId})
    }
    return null
}

export const addItemToCart = async(req, res) => {
    try {
        const {
            productId, quantity, size,
            color, guestId, userId
        } = req.body

        const product = await Product.findById(productId)
        if(!product) {
            return res.status(404).json({message : "No product found!"})
        }

        // Determine if the user is logged in or guest
        let cart = await getCart(userId, guestId)

        if(cart) {
            const productIndex = cart.products.findIndex(
                (p) => 
                    p.productId.toString() === productId &&
                    p.size === size &&
                    p.color === color
            )
            if(productIndex > -1) {
                cart.products[productIndex].quantity += quantity
            } else {
                cart.products.push({
                    productId,
                    name : product.name,
                    image : product.images[0].url,
                    price : product.price,
                    size,
                    color,
                    quantity
                })
            }

            cart.totalPrice = cart.products.reduce((acc, item) =>
                acc + item.price * item.quantity, 0
            )

            await cart.save()
            return res.status(200).json(cart)
        } else {
            const newCart = await Cart.create({
                user : userId ? userId : undefined,
                guestId : guestId ? guestId : 'guest_' + new Date().getTime(),
                products : [{  
                    productId,
                    name : product.name,
                    image : product.images[0].url,
                    price : product.price,
                    size,
                    color,
                    quantity
                }],
                totalPrice : product.price * quantity
            })

            return res.status(200).json(newCart)
        }

    } catch(err) {
        console.log("Error in addToCart controller : ", err)
        res.status(500).json({message : "Internal server error!"})
    }
}

export const updateCartItem = async(req, res) => {
    try {
        const { productId, quantity, size, color, guestId, userId } = req.body

        let cart = await getCart(userId, guestId)
        if(!cart) return res.status(404).json({message : "Cart not found!"})

        const productIndex = cart.products.findIndex((p) => 
            p.productId.toString() === productId &&
            p.size === size &&
            p.color === color
        )

        if(productIndex > -1) {
            if(quantity > 0) {
                cart.products[productIndex].quantity = quantity
            } else {
                cart.products.splice(productIndex, 1)
            }
            cart.totalPrice = cart.products.reduce((acc, item) =>
                acc + item.price * item.quantity, 0
            )
            await cart.save()
            return res.status(200).json(cart)
        } else {
            return res.status(404).json({message : "Product not found in cart!"})
        }

    } catch(err) {
        console.log("Error in updateCart controller : ", err)
        res.status(500).json({message : "Internal server error!"})
    }
}

export const deleteCartItem = async(req, res) => {
    try {
        const { productId, size, color, guestId, userId } = req.body

        let cart = await getCart(userId, guestId)
        if(!cart) return res.status(404).json({message : "Cart not found!"})

        const productIndex = cart.products.findIndex((p) => 
            p.productId.toString() === productId &&
            p.size === size &&
            p.color === color
        )

        if(productIndex > -1) {
            cart.products.splice(productIndex, 1)
            
            cart.totalPrice = cart.products.reduce((acc, item) =>
                acc + item.price * item.quantity, 0
            )
            await cart.save()
            return res.status(200).json(cart)
        } else {
            return res.status(404).json({message : "Product not found in cart!"})
        }

    } catch(err) {
        console.log("Error in deleteCart controller : ", err)
        res.status(500).json({message : "Internal server error!"})
    }
}

export const getCartItems = async(req, res) => {
    try {
        const { userId, guestId } = req.query
        const cart = await getCart(userId, guestId)
        
        if(cart) {
            res.status(200).json(cart)
        }  else {
            res.status(200).json({message : "Cart not found!"})
        }
    } catch(err) {
        console.log("Error in getCartItems controller : ", err)
        res.status(500).json({message : "Internal server error!"})
    }
}

export const mergeGuestCartWithUserCart = async(req, res) => {
    try {
        const { guestId } = req.body

        const guestCart = await Cart.findOne({guestId})
        const userCart = await Cart.findOne({user : req.user._id})

        if(guestCart) {
            if(guestCart.products.lenght === 0) {
                return res.status(400).json({messsage : "Guest cart is empty!"})
            }

            if(userCart) {
                guestCart.products.forEach((guestItem) => {
                    const productIndex = userCart.products.findIndex(item => 
                        item.productId.toString() === guestItem.productId.toString() &&
                        item.size === guestItem.size &&
                        item.color === guestItem.color
                    )

                    if(productIndex > -1) {
                        userCart.products[productIndex].quantity += guestItem.quantity
                    } else {
                        userCart.products.push(guestItem)
                    }
                })

                userCart.totalPrice = userCart.products.reduce((acc, item) => 
                    acc + item.price * item.quantity, 0
                )

                await userCart.save()

                try {
                    await Cart.findOneAndDelete({guestId})
                } catch(err) {
                    console.log("Error in deleting guest cart", err)
                }
                res.status(200).json(userCart)
            } else {
                guestCart.user = req.user._id
                guestCart.guestId = undefined
                await guestCart.save()

                res.status(200).json(guestCart)
            }
        } else {
            if(userCart) {
                return res.status(200).json(userCart)
            }
            res.status(404).json({message : "Guest cart not found!"})
        }

    } catch(err) {
        console.log("Error in mergeGuestCartWithUserCart controller : ", err)
        res.status(500).json({message : "Internal server error!"})
    }
}