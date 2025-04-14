import mongoose from 'mongoose'
import products from './data/products.js'
import Product from './models/product.model.js'
import User from './models/user.model.js'
import { Cart } from './models/cart.model.js'
import 'dotenv/config'

mongoose.connect('mongodb+srv://shubhamdhapola69:XqZtARotT8pnfgs7@rabbit.lsrco6o.mongodb.net/RabbitDB?retryWrites=true&w=majority&appName=Rabbit')

const seedData = async() => {
    try {
        await Product.deleteMany()
        await User.deleteMany()
        await Cart.deleteMany()

        const createdUser = await User.create({
            name : "Shubham",
            email : "shubham123@gmail.com",
            password : "123456",
            role : "admin",
        })

        const userId = createdUser._id

        const sampleProducts = products.map(product => {
            return {...product, user : userId}
        })

        await Product.insertMany(sampleProducts)
        console.log("Product data seeded successfully!")

    } catch(err) {
        console.log("Error in seedData : ", err)
    }
}

seedData()


