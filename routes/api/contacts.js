const express = require('express');

const controllers = require('../../controllers/contacts/index');
const middlewares = require('../../middlewares');
const schemas = require('../../schemas/index');
const controllerWrapper = require('../../helpers/controllerWrapper');

const router = express.Router();

router.get('/',
    middlewares.authenticate,
    controllerWrapper(controllers.listContacts)
);

router.get('/:contactId',
    middlewares.authenticate,
    controllerWrapper(controllers.getContactById)
);

router.post('/',
    middlewares.authenticate,
    middlewares.validateBody(schemas.addContactSchema),
    controllerWrapper(controllers.addContact)
);

router.delete('/:contactId',
    middlewares.authenticate,
    controllerWrapper(controllers.removeContact))

router.put('/:contactId',
    middlewares.authenticate,
    middlewares.validateBody(schemas.updateContactSchema),
    controllerWrapper(controllers.updateContact)
)

router.patch('/:contactId/favorite',
    middlewares.authenticate,
    middlewares.validateBody(schemas.updateFavoriteSchema),
    controllerWrapper(controllers.updateStatusContact)
)

module.exports = router;