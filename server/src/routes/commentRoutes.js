const Router = require('express');
const { GetComment, Create, GetById } = require('../controller/commentController');
const router = Router();

router.route('/create').post(Create);
router.route('/').get(GetComment);
router.route('/get/:id').get(GetById);

module.exports = router;