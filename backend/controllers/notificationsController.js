import Notification from '../models/Notification.js'
import mongoose from 'mongoose'

const getUserNotifications = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.userID)) {
            return res.status(400).json({
                error: 'Invalid user ID'
            })
        }
        const notifications = await Notification.find({ userID: req.params.userID })
        if (notifications.length == 0) {
            return res.status(204).json({
                message: 'This user has no notifications'
            })
        }
        res.json(notifications)
    } catch(err) {
        console.error(err)
        res.status(500).json({
            error: 'Server error, try again later'
        })
    }
}

const createNotification = async (req, res) => {
    try {
        const newNotification = await Notification.create({
            userID: req.user.id,
            content: req.body.content
        })
        res.status(201).json({
            message: 'Notification created successfully',
            notification: newNotification
        })
    } catch(err) {
        console.error(err)
        res.status(500).json({
            error: 'Server error, try again later'
        })
    }
}

const deleteNotification = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                error: 'Invalid notification ID'
            })
        }
        const notification = await Notification.findOne({ _id: req.params.id })
        if (!notification) {
            return res.status(404).json({
                error: 'Notification not found'
            })
        }
        await Notification.deleteOne(notification)
        res.status(204).json({
            message: 'Notification deleted successfully'
        })
    } catch(err) {
        console.error(err)
        res.status(500).json({
            error: 'Server error, try again later'
        })
    }
}

export default { getUserNotifications, createNotification, deleteNotification }