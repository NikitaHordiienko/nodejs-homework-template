const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const { randomUUID } = require('crypto');
const User = require('../../models/users/index');
const { createError, sendEmail } = require('../../helpers/index');

const { BASE_URL } = process.env;

async function registerUser(req, res) {
    const { password, email, subscription } = req.body;

    const user = await User.findOne({ email });

    if (user) {
        throw createError({status: 409, message: 'Email in use'})
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const avatarURL = gravatar.url(email, { protocol: 'https' });
    
    const verificationToken = randomUUID();

    const result = await User.create({
        password: hashPassword,
        email,
        subscription,
        avatarURL,
        verificationToken
    });

    const verificationTokenURL = `${BASE_URL}/api/users/verify/${verificationToken}`;

    const message = {
        to: email,
        subject: 'Email verification',
        html: `<a href='${verificationTokenURL}'>Click to verify your email</a>`
    }

    await sendEmail(message);

    res.status(201).json({
        user: {
            email: result.email,
            subscription: result.subscription,
        }        
    })
}

module.exports = registerUser;