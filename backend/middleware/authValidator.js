import { registerSchema, loginSchema } from '../schemas/authSchemas.js'

const validate = async (req, res, next) => {
    try {
        if (req.url == '/auth/register') {
            await registerSchema.validateAsync(req.body)
            next()
        } else if (req.url == '/auth/login') {
            await loginSchema.validateAsync(req.body)
            next()
        }
    } catch(err) {
        if (err.isJoi) {
            const errors = err.details.map(detail => detail.message)
            return res.status(400).json({
                error: errors
            })
        }
        console.error(err)
        res.status(500).json({
            error: 'Server error, try again later'
        })
    }
}

export default validate