const Joi = require('joi');

const registerUserSchema = Joi.object({
    password: Joi.string()
        .min(6)
        .required(),
    
    email: Joi.string()
        .email()
        .required(),
    
    subscription: Joi.string()
        .valid("starter", "pro", "business"),
    
    token: Joi.string(),
});

module.exports = registerUserSchema;