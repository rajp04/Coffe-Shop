const Router = require('express');
const { Login } = require('../controller/userController');
const router = Router();

router.route('/login').post(Login);

module.exports = router;