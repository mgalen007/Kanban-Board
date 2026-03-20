import express from 'express'
import authController from '../controllers/authController.js'
import authValidator from '../middleware/authValidator.js'

const router = express.Router()

router.post("/login", authValidator, authController.login)
router.post("/register", authValidator, authController.register)

export default router