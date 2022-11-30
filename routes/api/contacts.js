const express = require('express');

const controllers = require('../../controllers/contacts/index');
const validateBody = require('../../middlewares');
const schemas = require('../../schemas/index');
const controllerWrapper = require('../../helpers/controllerWrapper');

const router = express.Router();

router.get('/', controllerWrapper(controllers.listContacts));

router.get('/:contactId', controllerWrapper(controllers.getContactById));

router.post('/', validateBody(schemas.addContactSchema), controllerWrapper(controllers.addContact));

router.delete('/:contactId', controllerWrapper(controllers.removeContact))

router.put('/:contactId', validateBody(schemas.updateContactSchema), controllerWrapper(controllers.updateContact))

module.exports = router
