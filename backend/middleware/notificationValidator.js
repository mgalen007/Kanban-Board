import notificationSchema from '../schemas/notificationSchema.js'

const validate = async (req, res, next) => {
    try {
        await notificationSchema.validateAsync(req.body)
        next()
    } catch(err) {
        if (err.isJoi) {
            return res.status(400).json({
                error: err.details[0].message
            })
        }
        console.error(err)
        res.status(500).json({
            error: 'Server error, try again later'
        })
    }
}

export default validate