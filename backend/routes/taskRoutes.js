import express from 'express'
import tasksController from '../controllers/tasksController.js'
import taskValidator from '../middleware/taskValidator.js'

const router = express.Router()


router.post("/", taskValidator, tasksController.createTask)

router.route("/:taskID")
    .get(tasksController.getTaskByID)
    .delete(tasksController.deleteTask)

export default router