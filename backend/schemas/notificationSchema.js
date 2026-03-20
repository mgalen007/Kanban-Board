import Joi from 'joi'

const notificationSchema = Joi.object({
    userID: Joi.string().min(24),
    content: Joi.string().min(4).required()
}, { stripUnknown: true })

export default notificationSchema