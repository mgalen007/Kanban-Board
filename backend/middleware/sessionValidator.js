import sessionSchema from '../schemas/sessionSchema.js'
import mongoose from 'mongoose'

const validate = async (req, res, next) => {
    try {
        if (!req.query.userID) {
            return res.status(400).json({
                error: 'User ID not provided'
            })
        }
        if (!mongoose.Types.ObjectId.isValid(req.query.userID)) {
            return res.status(400).json({
                error: 'Invalid user ID'
            })
        }
        next()
    } catch(err) {
        if (err.isJoi) {
            return res.status(400).json({
                error: err.details[0].message
            })
        }
        console.error(err)
        res.status(500).json({
            error: 'Server error, try again later'
        })
    }
}

export default validate