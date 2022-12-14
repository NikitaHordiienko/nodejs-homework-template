const Contact = require('../../models/contacts/index');
const { createError } = require('../../helpers/index');

async function updateContact(req, res) {
  const { contactId } = req.params;
  const { _id } = req.user;

  const result = await Contact.findOneAndUpdate({_id: contactId, owner: _id }, req.body, {new: true});

  if (!req.body.name || !req.body.email || !req.body.phone) {
    throw createError({ status: 400, message: 'missing fields' });
  }
    
  if (!result) {
    throw createError({ status: 404, message: 'Not found' });
  }

  res.json(result);
}

module.exports = updateContact;