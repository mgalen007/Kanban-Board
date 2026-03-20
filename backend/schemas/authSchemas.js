import Joi from 'joi'

export const loginSchema = Joi.object({
    username: Joi.string().min(4).required(),
    password: Joi.string().required()
}, { stripUnkown: true })

export const registerSchema = Joi.object({
    email: Joi.string().min(8).required(),
    username: Joi.string().min(4).required(),
    password: Joi.string().required()
}, { stripUnknown: true })