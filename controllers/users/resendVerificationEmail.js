const { createError, sendEmail } = require('../../helpers');
const User = require('../../models/users/index');

const { BASE_URL } = process.env;

async function resendVerificationEmail(req, res) {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        throw createError({ status: 404, message: 'User not found' });
    }

    if (user.verify) {
        throw createError({ status: 400, message: 'Verification has already been passed' });
    }

    const verificationTokenURL = `${BASE_URL}/api/users/verify/${user.verificationToken}`;

    const message = {
        to: email,
        subject: 'Email verification',
        html: `<a href='${verificationTokenURL}'>Click to verify your email</a>`
    }

    await sendEmail(message);

    res.json({
        message: 'Email was resent successfully'
    })
}

module.exports = resendVerificationEmail;