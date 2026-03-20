import Joi from 'joi'

const taskSchema = Joi.object({
    category: Joi.string().valid("in progress", "waiting", "completed").required(),
    title: Joi.string().min(4).required(),
    description: Joi.string().min(10).required(),
    userID: Joi.string().min(24).required(),
    sessionID: Joi.string().min(24).required()
}, { stripUnknown: true })

export default taskSchema
