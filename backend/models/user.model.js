import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        match : [/.+\@.+\..+/, "Invalid email format"]
    },
    password : {
        type : String,
        required : false,
        minLength : 1
    },
    role : {
        type : String,
        enum : ["customer", "admin"],
        default : "customer",
        lowercase : true
    }
},
    {timestamps : true}
)

userSchema.pre('save', async function(next) {
    if(!this.isModified("password")) return next()
    try {
        this.password = await bcrypt.hash(this.password, 10)
        next()
    } catch(err){
        next(err)
    }
})

userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)   
}

const User = mongoose.model('User', userSchema)
export default User
