const addContactSchema = require('./contacts/addContactSchema');
const updateContactSchema = require('./contacts/updateContactSchema');
const updateFavoriteSchema = require('./contacts/updateFavoriteSchema');
const registerUserSchema = require('./users/registerUserSchema');
const loginUserSchema = require('./users/loginUserSchema');
const updateSubscriptionSchema = require('./users/updateSubscriptionSchema');


module.exports = {
    addContactSchema,
    updateContactSchema,
    updateFavoriteSchema,
    registerUserSchema,
    loginUserSchema,
    updateSubscriptionSchema,
}