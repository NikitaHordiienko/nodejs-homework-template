const Contact = require('../../models/contacts/index');
const { createError } = require('../../helpers/index');

async function removeContact(req, res) {
    const { contactId } = req.params;

    const result = await Contact.findByIdAndRemove(contactId);

    if (!result) {
        throw createError({ status: 404, message: 'Not found' });
    }

    res.json({
        message: "contact deleted",
        data: result,
    });
}

module.exports = removeContact;