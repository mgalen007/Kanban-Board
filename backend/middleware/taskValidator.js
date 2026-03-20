import taskSchema from '../schemas/taskSchema.js'

const validate = async (req, res, next) => {
    try {
        if (!req.body) {
            return res.status(400).json({
                error: 'Invalid request body'
            })
        }
        await taskSchema.validateAsync(req.body)
        next()
    } catch(err) {
        if (err.isJoi) {
            return res.status(400).json({
                error: err.details[0].message
            })
        }
        res.status(500).json({
            error: 'Server error, try again later'
        })
    }
}

export default validate