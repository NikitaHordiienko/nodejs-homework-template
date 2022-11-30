const contacts = require('../../models/contacts');
const { createError } = require('../../helpers/index');

async function removeContact(req, res) {
    const { contactId } = req.params;

    const result = await contacts.removeContact(contactId);

    if (!result) {
        throw createError({ status: 404, message: 'Not found' });
    }

    res.json({
        message: "contact deleted",
        data: result,
    });
}

module.exports = removeContact;