import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const register = async (req, res) => {
    try {
        // Extract the credentials
        const { email, username, password } = req.body
        const passwordHash = await bcrypt.hash(password, 10)

        // Create the user
        await User.create({email, username, passwordHash})

        res.status(201).json({
            message: 'User created successfully!'
        })
    } catch(err) {
        console.error(err)
        res.status(500).json({
            error: 'Server error, try again later'
        })
    }
}

const login = async (req, res) => {
    try {
        // Extract the credentials
        const { username, password } = req.body

        // Check whether user exists
        const validUser = await User.findOne({ username })
        if (!validUser) {
            return res.status(401).json({
                error: 'Invalid credentials'
            })
        }

        // If user exists, verify the password
        const validPasswordHash = validUser.passwordHash
        let isValid = await bcrypt.compare(password, validPasswordHash)
        if (!isValid) {
            return res.status(401).json({
                error: 'Invalid credentials'
            })
        }

        // Issue a JWT
        const token = jwt.sign(
            { id: validUser._id, username: validUser.username },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '2d' }
        )
        res.json({
            message: 'Authentication successful!',
            token
        })
    } catch(err) {
        console.error(err)
        res.status(500).json({
            error: 'Server error, try again later'        })
    }
}

export default { login, register }