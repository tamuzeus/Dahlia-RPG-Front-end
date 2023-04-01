import Joi from 'joi';

export const emailSchema = Joi.string().email({ tlds: { allow: ['com', 'net'] } }).required();

export const passwordSchema = Joi.string().min(6).required();
