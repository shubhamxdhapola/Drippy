import admin from "../config/firebase.js"
import User from "../models/user.model.js"
import { generateJwtToken } from "../utils/generateJwtToken.js"
import { saveCookie } from "../utils/saveCookie.js"

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required!" })
        }

        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exists!" })
        }

        const newUser = await User.create(req.body)

        if (newUser) {
            const jwtToken = generateJwtToken(newUser._id, newUser.role)
            saveCookie(jwtToken, res)
            res.status(200).json({
                user: {
                    _id: newUser._id,
                    name: newUser.name,
                    email: newUser.email,
                    role: newUser.role,
                },
                token: jwtToken,
                message: "Registered Successfully!"
            })
        }
    } catch (err) {
        console.log("Error in user register controller : ", err)
        res.status(500).json({ message: "Internal server error!" })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required!" })
        }

        const user = await User.findOne({ email })
        if (!user || !user.password) {
            return res.status(400).json({ message: "Invalid credentials!" })
        }

        const isPasswordCorrect = await user.comparePassword(password) 
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials!" })
        }

        if (user) {
            const jwtToken = generateJwtToken(user._id, user.role)
            saveCookie(jwtToken, res)
            res.status(200).json({
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
                token: jwtToken,
                message: "Logged In Successfully!"
            })
        }
    } catch (err) {
        console.log("Error in user login controller : ", err)
        res.status(500).json({ message: "Internal server error!" })
    }
}

export const googleSignIn = async (req, res) => {
    try {
        const { idToken } = req.body

        const decodedToken = await admin.auth().verifyIdToken(idToken)
        const { name, email } = decodedToken

        let user = await User.findOne({ email })
        if (!user) {
            user = await User.create({ name, email })
        }

        const jwtToken = generateJwtToken(user._id, user.role)
        saveCookie(jwtToken, res)
        res.status(200).json({
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
            token: jwtToken,
            message: "Singed In Successfully!"
        })
    } catch (err) {
        console.log("Error in google singin controller : ", err)
        res.status(500).json({ message: "Internal server error!" })
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie('jwt')
        res.status(200).json({ message: "Logged out successfully!" })
    } catch (err) {
        console.log("Error in logout controller:", err);
        res.status(500).json({ message: "Internal server error!" })
    }
}

export const profile = async (req, res) => {
    try {
        res.status(200).json(req.user)
    } catch (err) {
        console.log("Error in profile controller : ", err)
        res.status(500).json({ message: "Internal server error!" })
    }
}