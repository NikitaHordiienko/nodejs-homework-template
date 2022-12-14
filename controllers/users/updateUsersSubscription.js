const User = require('../../models/users/index');
const { createError } = require('../../helpers/index');

async function updateUsersSubscription(req, res) {
    const { subscription } = req.body;
    const { _id } = req.user;

    const result = await User.findByIdAndUpdate(_id, { subscription }, { new: true });

    if (!result) {
    throw createError({ status: 404, message: 'Not found' });
    }
    
    res.json({
        email: req.user.email,
        subscription: req.user.subscription,
    })
}

module.exports = updateUsersSubscription;