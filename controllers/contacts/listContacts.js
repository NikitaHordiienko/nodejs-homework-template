const Contact = require('../../models/contacts/index');

async function listContacts(req, res) {
    const result = await Contact.find({});

    res.json(result)
}

module.exports = listContacts;