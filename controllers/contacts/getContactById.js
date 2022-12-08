const Contact = require('../../models/contacts/index');
const { createError } = require('../../helpers/index');

async function getContactById(req, res) {
    const { contactId } = req.params;

    const result = await Contact.findById(contactId);

    if (!result) {
        throw createError({ status: 404, message: 'Not found' });
    }
  
    res.json(result);
}

module.exports = getContactById;