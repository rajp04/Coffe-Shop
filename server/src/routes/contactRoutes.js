const Router = require('express');
const router = Router();
const { Create, GetContact, GetByIdContact } = require('../controller/contactController.js');

router.route('/create').post(Create);
router.route('/').get(GetContact);
router.route('/:id').get(GetByIdContact);

module.exports = router;