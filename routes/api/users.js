const express = require('express');

const controllers = require('../../controllers/users/index');
const middlewares = require('../../middlewares/index')
const schemas = require('../../schemas/index');
const controllerWrapper = require('../../helpers/controllerWrapper');

const router = express.Router();

router.post('/signup',
    middlewares.validateBody(schemas.registerUserSchema),
    controllerWrapper(controllers.registerUser)
);

router.post('/login',
    middlewares.validateBody(schemas.loginUserSchema),
    controllerWrapper(controllers.loginUser)
);

router.get('/current',
    middlewares.authenticate,
    controllerWrapper(controllers.getCurrentUser)
);

router.get('/logout',
    middlewares.authenticate,
    controllerWrapper(controllers.logoutUser)
);

router.patch('/',
    middlewares.authenticate,
    middlewares.validateBody(schemas.updateSubscriptionSchema),
    controllerWrapper(controllers.updateUsersSubscription)
);

router.patch('/avatars',
    middlewares.authenticate,
    middlewares.upload.single('avatar'),
    controllerWrapper(controllers.updateAvatar)
);

router.get('/verify/:verificationToken',
    controllerWrapper(controllers.verify)
);

router.post('/verify',
    middlewares.validateBody(schemas.resendVerificationSchema),
    controllerWrapper(controllers.resendVerificationEmail)
);

module.exports = router;