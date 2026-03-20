import express from 'express'
import authController from '../controllers/authController.js'
import validator from '../middleware/authValidator.js'

const router = express.Router()

router.post("/login", validator, authController.login)
router.post("/register", validator, authController.register)

export default router