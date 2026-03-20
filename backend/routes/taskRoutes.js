import express from 'express'
import tasksController from '../controllers/tasksController.js'

const router = express.Router()


router.post("/", tasksController.createTask)

router.route("/:taskID")
    .get(tasksController.getTaskByID)
    .delete(tasksController.deleteTask)

export default router