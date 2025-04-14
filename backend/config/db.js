import mongoose from "mongoose"

export default async function connectDB() {
    await mongoose.connect(process.env.MONGO_ATLAS_URI)
    .then(() => console.log("MongoDB connected successfully!"))
    .catch((err) => console.log("Error in connecting to MongoDB :" , err))
}
