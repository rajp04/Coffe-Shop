const Router = require('express');
const { Create, GetMenu, GetByIdMenu, DeleteById, Update } = require('../controller/menuController');
const router = Router();

router.route('/create').post(Create);
router.route('/').get(GetMenu);
router.route('/:id').get(GetByIdMenu);
router.route('/delete/:id').delete(DeleteById);
router.route('/update/:id').put(Update);

module.exports = router;