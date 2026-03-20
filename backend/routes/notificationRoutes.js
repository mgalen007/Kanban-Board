import express from 'express'
import notificationsController from '../controllers/notificationsController.js'
import notificationValidator from '../middleware/notificationValidator.js'

const router = express.Router()

router.route("/:userID")
    .get(notificationsController.getUserNotifications)
    .post(notificationValidator, notificationsController.createNotification)

router.delete("/:id", notificationsController.deleteNotification)

export default router