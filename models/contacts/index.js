const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
    name: {
        type: String,
        match: /^[A-Z]+ [A-Z]+$/i,
        minLength: 5,
        maxLength: 40,
        trim: true,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
        trim: true,
        unique: true,
    },
    phone: {
        type: String,
        minLength: 10,
        maxLength: 15,
        match: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        unique: true,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
}, {
    versionKey: false,
});

const Contact = model('contact', contactSchema);

module.exports = Contact;