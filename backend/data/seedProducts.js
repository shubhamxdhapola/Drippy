import mongoose from 'mongoose'
import Product from '../models/product.model.js'
import products from './products.js'

async function seedProducts() {
    try {
        await mongoose.connect(
            'mongodb+srv://shubhamdhapola69:XqZtARotT8pnfgs7@rabbit.lsrco6o.mongodb.net/RabbitDB?retryWrites=true&w=majority&appName=Rabbit'
        )
        console.log("MongoDB connected!")

        await Product.deleteMany({})
        console.log("Old products deleted.")

        const updatedProducts = products.map(product => ({
            ...product,
            user: '67fd22290cba831b0f76716c'
        }))

        await Product.insertMany(updatedProducts)
        console.log("Products seeded successfully!")

        process.exit()
    } catch (error) {
        console.error("Seeding failed:", error)
        process.exit(1)
    }
}

seedProducts()
