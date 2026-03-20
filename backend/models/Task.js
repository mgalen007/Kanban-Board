import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    category: {
        type: string,
        enum: ["in progress", "waiting", "completed"],
        required: true
    },
    title: {
        type: string,
        required: true
    },
    description: {
        type: string,
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