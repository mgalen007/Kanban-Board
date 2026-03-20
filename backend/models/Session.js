import mongoose from 'mongoose'

const sessionSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    tasks: {
        type: [mongoose.Schema.Types.ObjectId]
    }
}, { timestamps: true })

const Session = mongoose.model("Session", sessionSchema)

export default Session