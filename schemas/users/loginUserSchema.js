const Joi = require('joi');

const loginUserSchema = Joi.object({
    password: Joi.string()
        .min(6)
        .required(),
    
    email: Joi.string()
        .email()
        .required(),
});

module.exports = loginUserSchema;