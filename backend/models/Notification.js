import mongoose from 'mongoose'

const notificationSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    content: {
        type: string,
        required: true
    }
}, { timestamps: true })

const Notification = mongoose.model("Notification", notificationSchema)

export default Notification