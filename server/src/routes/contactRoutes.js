const Router = require('express');
const router = Router();
const { Create } = require('../controller/contactController.js');

router.route('/create').post(Create);

module.exports = router;