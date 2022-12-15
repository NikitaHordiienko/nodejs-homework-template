const Contact = require('../../models/contacts/index');

async function listContacts(req, res) {
    const { _id } = req.user;
    const { page = 1, limit = 20 , favorite} = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const result = await Contact.find({ owner: _id, ...(favorite ? { favorite } : {})},'', { skip, limit }).populate('owner', 'email');

    res.json(result)
}

module.exports = listContacts;