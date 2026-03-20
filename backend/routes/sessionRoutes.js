import express from 'express'
import sessionsController from '../controllers/sessionsController.js'
import sessionValidator from '../middleware/sessionValidator.js'

const router = express.Router()

router.route("/")
    .get(sessionValidator, sessionsController.getUserSessions)
    .post(sessionValidator, sessionsController.createSession)

router.route("/:sessionID")
    .get(sessionsController.getSessionByID)
    .put(sessionsController.addTaskToSession)

router.delete("/:sessionID/:taskID", sessionsController.deleteTask)

export default router