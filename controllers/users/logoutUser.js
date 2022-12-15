const User = require('../../models/users/index');

async function logoutUser(req, res) {
    const { _id } = req.user;

    await User.updateOne({ _id }, { token: '' })
    
    res.status(204).json()
}

module.exports = logoutUser;