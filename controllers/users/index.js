const registerUser = require('./resgisterUser');
const loginUser = require('./loginUser');
const getCurrentUser = require('./getCurrentUser');
const logoutUser = require('./logoutUser');
const updateUsersSubscription = require('./updateUsersSubscription');
const updateAvatar = require('./updateAvatar');

module.exports = {
    registerUser,
    loginUser,
    getCurrentUser,
    logoutUser,
    updateUsersSubscription,
    updateAvatar,
}