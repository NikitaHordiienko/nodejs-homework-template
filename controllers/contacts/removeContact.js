const Contact = require('../../models/contacts/index');
const { createError } = require('../../helpers/index');

async function removeContact(req, res) {
    const { contactId } = req.params;
    const { _id } = req.user;

    const result = await Contact.findOneAndRemove({_id: contactId, owner: _id });

    if (!result) {
        throw createError({ status: 404, message: 'Not found' });
    }

    res.json({
        message: "contact deleted",
        data: result,
    });
}

module.exports = removeContact;