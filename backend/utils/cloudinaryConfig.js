import pkg from 'cloudinary';
const { v2: cloudinary } = pkg;
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import 'dotenv/config'

cloudinary.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
})

const rabbitStorage = new CloudinaryStorage({
    cloudinary, 
    params : {
        folder : 'Rabbit_Storage'
    }
})

export { cloudinary, rabbitStorage }
