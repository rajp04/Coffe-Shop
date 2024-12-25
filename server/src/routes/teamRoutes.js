const Router = require('express');
const router = Router();
const { upload } = require('../middleware/multer.js');
const { Create, GetTeam, GetByIdTeam, Update, DeleteById } = require('../controller/teamController.js');

router.route('/create').post(upload.single('image'), Create);
router.route('/update/:id').put(upload.single('image'), Update);
router.route('/').get(GetTeam);
router.route('/:id').get(GetByIdTeam);
router.route('/delete/:id').delete(DeleteById);

module.exports = router;