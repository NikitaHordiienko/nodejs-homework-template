const Contact = require('../../models/contacts/index');

async function addContact(req, res, next) {
  const result = await Contact.create(req.body)

  res.status(201).json(result);
}

module.exports = addContact;