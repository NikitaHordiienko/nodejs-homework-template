const contacts = require('../../models/contacts');
const { createError } = require('../../helpers/index');

async function updateContact(req, res) {
  const { contactId } = req.params;

  const result = await contacts.updateContact(contactId, req.body);

  if (!req.body.name || !req.body.email || !req.body.phone) {
    throw createError({ status: 400, message: 'missing fields' });
  }
    
  if (!result) {
    throw createError({ status: 404, message: 'Not found' });
  }

  res.json(result);
}

module.exports = updateContact;