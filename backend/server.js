import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import notificationRoutes from './routes/notificationRoutes.js'
import taskRoutes from './routes/taskRoutes.js'
import sessionRoutes from './routes/sessionRoutes.js'

// Load environment variables
dotenv.config()
const PORT = process.env.PORT || 3000

const app = express()

// Middleware
app.use(express.json())
app.use(cors())

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

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))


