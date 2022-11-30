const contacts = require('../../models/contacts');
const { createError } = require('../../helpers/index');

async function getContactById(req, res) {
    const { contactId } = req.params;

    const result = await contacts.getContactById(contactId);

    if (!result) {
        throw createError({ status: 404, message: 'Not found' });
    }
  
    res.json(result);
}

module.exports = getContactById;