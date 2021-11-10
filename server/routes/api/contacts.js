const router = require('express').Router();
const {
    createContact
} = require('../../controllers/contacts-controllers');

router.route('/').post(createContact)

module.exports = router;