const contacts = require('../../models/contacts')

async function listContacts(req, res) {
    const result = await contacts.listContacts();

    res.json(result)
}

module.exports = listContacts;