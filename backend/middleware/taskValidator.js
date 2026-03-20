import taskSchema from '../schemas/taskSchema.js'

const validate = async (req, res, next) => {
    try {
        await taskSchema.validateAsync(req.body)
        next()
    } catch(err) {
        if (err.isJoi) {
            const errors = err.map(detail => detail.message)
            return res.status(400).json({
                error: errors
            })
        }
        res.status(500).json({
            error: 'Server error, try again later'
        })
    }
}

export default validate