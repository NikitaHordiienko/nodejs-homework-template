const Contact = require('../../models/contacts/index');
const { createError } = require('../../helpers/index');

async function updateStatusContact(req, res) {
  const { contactId } = req.params;
  const { _id } = req.user;

  const result = await Contact.findByIdAndUpdate({_id: contactId, owner: _id }, req.body, {new: true});

  if (req.body.favorite === undefined) {
    throw createError({ status: 400, message: 'missing field favorite' });
  }
    
  if (!result) {
    throw createError({ status: 404, message: 'Not found' });
  }

  res.json(result);
}

module.exports = updateStatusContact;