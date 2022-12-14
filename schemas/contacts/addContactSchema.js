const Joi = require('joi');

const addContactSchema = Joi.object({
  name: Joi.string()
    .regex(/^[A-Z]+ [A-Z]+$/i)
    .min(5)
    .max(40)
    .trim(true)
    .required(),
  
  email: Joi.string()
    .email()
    .trim(true)
    .required(),
  
  phone: Joi.string()
    .min(10)
    .max(15)
    .pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
    .required(),
  
  favorite: Joi.boolean()
});

module.exports = addContactSchema;