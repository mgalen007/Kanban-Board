import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import notificationRoutes from './routes/notificationRoutes.js'
import taskRoutes from './routes/taskRoutes.js'
import sessionRoutes from './routes/sessionRoutes.js'
import connectDB from './utils/db.js'
import logger from './middleware/logger.js'

// Load environment variables
dotenv.config()

const app = express()
connectDB()

// Middleware
app.use(express.json())
app.use(cors())
app.use(logger)

// Health check endpoint
app.get('/health-check', (req, res) => {
    res.json({
        status: "ok",
        message: "Server up and running"
    })
})

// Mount routes
app.use('/auth', authRoutes)
app.use('/tasks', taskRoutes)
app.use('/sessions', sessionRoutes)
app.use('/notifications', notificationRoutes)

// 404 route
app.use((req, res, next) => {
    res.status(404).json({
        error: "Route not found"
    })
    next()
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))


