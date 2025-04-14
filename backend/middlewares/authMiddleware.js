import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

export const authenticateUser = async(req, res, next) => {
    try {
        const jwtToken = req.cookies.jwt

        if(!jwtToken) {
            return res.status(401).json({message : "Unauthorized - No token provided!"})
        }

        jwt.verify(jwtToken, process.env.JWT_SECRET, async(err, decodedToken) => {

            if(err) return res.status(401).json({message : "Unauthorized - Invalid token!"})

            const user = await User.findById(decodedToken.userId).select("-password")
            if(!user) return res.status(400).json({message : "User not exists!"})

            req.user = user
            
            next()
        })
    } catch(err) {
        console.log("Error in authenticateUser middleware : ", err)
        res.status(500).json({message : "Internal server error!"})
    }
}

export const isAdmin = async(req, res, next) => {
    try {
        if(req.user && req.user.role === 'admin') next()
        else res.status(401).json({message : "You are not authorized as an admin!"})
    } catch(err) {
        console.log("Error in isAdmin middleware : ", err)
        res.status(500).json({message : "Internal server error!"})
    }
}