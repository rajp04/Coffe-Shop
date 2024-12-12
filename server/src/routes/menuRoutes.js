const Router = require('express');
const { Create, GetMenu, GetByIdMenu, DeleteById } = require('../controller/menuController');
const router = Router();

router.route('/create').post(Create);
router.route('/').get(GetMenu);
router.route('/:id').get(GetByIdMenu);
router.route('/delete/:id').delete(DeleteById);

module.exports = router;