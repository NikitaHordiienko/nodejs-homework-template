const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/users/index');
const { createError } = require('../../helpers/index');

const { JWT_SECRET_KEY } = process.env;

async function loginUser(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        throw createError({status: 401, message: 'Email or password is wrong'})
    }

    if (!user.verify) {
        throw createError({status: 401, message: 'User is not verified! Please, verify your email.'})
    }

    const passwordCompare = await bcrypt.compare(password, user.password);

    if (!passwordCompare) {
        throw createError({status: 401, message: 'Email or password is wrong'})
    }

    const payload = {
        id: user._id,
    };

    const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '1d' });

    await User.findByIdAndUpdate(user._id, { token });

    res.json({
        token,
        user: {
            email,
            subscription: user.subscription
        }
    });
};

module.exports = loginUser;