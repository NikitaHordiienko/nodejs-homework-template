const User = require('../../models/users/index');
const { createError } = require('../../helpers/index');

async function verify(req, res) {
    const { verificationToken } = req.params;

    const user = await User.findOne({ verificationToken });

    if (!user) {
        throw createError({ status: 404, message: 'Not found' });
    }

    await User.findByIdAndUpdate(user._id, { verify: true, verificationToken: null });

    res.json({
        message: 'Verification successful'
    });
}

module.exports = verify;