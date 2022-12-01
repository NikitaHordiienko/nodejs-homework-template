const contacts = require('../../models/contacts');

async function addContact(req, res, next) {
  const result = await contacts.addContact(req.body)

  res.status(201).json(result);
}

module.exports = addContact;