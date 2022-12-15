const Joi = require('joi');

const updateContactSchema = Joi.object({
  name: Joi.string()
    .regex(/^[A-Z]+ [A-Z]+$/i)
    .min(5)
    .max(40)
    .trim(true),
  
  email: Joi.string()
    .email()
    .trim(true),
  
  phone: Joi.string()
    .min(10)
    .max(15)
    .pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im),
  
  favorite: Joi.boolean()
});

module.exports = updateContactSchema;