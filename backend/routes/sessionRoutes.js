import express from 'express'
import sessionsController from '../controllers/sessionsController.js'

const router = express.Router()

router.route("/:userID")
    .get(sessionsController.getUserSessions)
    .post(sessionsController.createSession)

router.route("/:sessionID")
    .get(sessionsController.getSessionByID)
    .put(sessionsController.addTaskToSession)

router.delete("/:sessionID/:taskID", sessionsController.deleteTask)

export default router