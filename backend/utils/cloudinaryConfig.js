import pkg from 'cloudinary';
const { v2: cloudinary } = pkg;
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import 'dotenv/config'

cloudinary.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
})

const drippyStorage = new CloudinaryStorage({
    cloudinary, 
    params : {
        folder : 'Drippy_Storage'
    }
})

export { cloudinary, drippyStorage }
