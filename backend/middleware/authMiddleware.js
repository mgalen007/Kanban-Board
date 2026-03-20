import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const authorize = async (req, res, next) => {
    try {
        const token = req.headers('Authorization').split(' ')[0]
        if (!token) {
            return res.status(401).json({
                error: 'No token provided'
            })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = decoded
        next()
    } catch(err) {
        console.error(err)
        if (err instanceof jwt.TokenExpiredError) {
            return res.status(401).json({
                error: 'Token has expired'
            })
        } else if (err instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({
                error: 'Invalid token'
            })
        }
        res.status(500).json({
            error: 'Server error, try again later'
        })
    }
}

export default authorize