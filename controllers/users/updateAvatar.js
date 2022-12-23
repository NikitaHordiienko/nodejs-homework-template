const Jimp = require('jimp');
const path = require('path');
const fs = require('fs/promises');
const User = require('../../models/users/index');

const avatarsDirPath = path.join(__dirname, '..', '..', 'public', 'avatars');

async function updateAvatar(req, res) {
    const { _id } = req.user;
    const { path: tmpPath, originalname } = req.file;
    const extension = path.extname(originalname);
    const filename = `${_id}${extension}`;

    const targetAvatarPath = path.join(avatarsDirPath, filename);

    await Jimp.read(tmpPath)
        .then((image) => {
            return image.resize(250, 250).write(tmpPath);
        })
        .catch((error) => {
            console.error(error);
        })

    await fs.rename(tmpPath, targetAvatarPath);

    const avatarURL = path.join('avatars', filename);

    await User.findByIdAndUpdate(_id, { avatarURL });

    res.json({
        avatarURL
    })
}

module.exports = updateAvatar;