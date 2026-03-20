import Joi from 'joi'

const sessionSchema = Joi.object({
    userID: Joi.string().min(24).required(),
    tasks: Joi.array().items(Joi.string().min(24))
}, { stripUnknown: true })

export default sessionSchema