const Contact = require('../../models/contacts/index');
const { createError } = require('../../helpers/index');

async function getContactById(req, res) {
    const { contactId } = req.params;
    const { _id } = req.user;

    const result = await Contact.findOne({_id: contactId, owner: _id });

    if (!result) {
        throw createError({ status: 404, message: 'Not found' });
    }
  
    res.json(result);
}

module.exports = getContactById;