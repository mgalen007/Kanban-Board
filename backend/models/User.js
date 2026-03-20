import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: {
        type: string,
        required: true
    },
    username: {
        type: string,
        required: true,
        unique: true
    },
    passwordHash: {
        type: string,
        required: true
    },
    sessions: {
        type: [mongoose.Schema.Types.ObjectId]
    },
    tasks: {
        type: [mongoose.Schema.Types.ObjectId]
    }
}, { timestamps: true })

const User = mongoose.model("User", userSchema)

export default User