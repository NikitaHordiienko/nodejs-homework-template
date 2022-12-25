const Joi = require('joi');

const resendVerificationSchema = Joi.object({
  email: Joi.string()
        .email()
        .required(),
});

module.exports = resendVerificationSchema;