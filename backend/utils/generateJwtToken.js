import jwt from 'jsonwebtoken'

export const generateJwtToken = (userId, role) => {
    return jwt.sign({userId, role}, process.env.JWT_SECRET, {
        expiresIn : "7d"
    })
} 