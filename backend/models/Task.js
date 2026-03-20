import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ["in progress", "waiting", "completed"],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    sessionID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
}, { timestamps: true })

const Task = mongoose.model("Task", taskSchema)

export default Task