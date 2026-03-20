import express from 'express'
import notificationsController from '../controllers/notificationsController.js'

const router = express.Router()

router.route("/:userID")
    .get(notificationsController.getUserNotifications)
    .post(notificationsController.createNotification)

router.delete("/:id", notificationsController.deleteNotification)

export default router