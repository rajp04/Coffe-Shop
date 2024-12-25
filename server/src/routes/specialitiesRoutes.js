const Router = require('express');
const router = Router();
const { upload } = require('../middleware/multer.js');
const { Create, GetSpecialities, GetByIdSpeciality, Update, DeleteById } = require('../controller/specialitiesController.js');

router.route('/create').post(upload.single('image'), Create);
router.route('/update/:id').put(upload.single('image'), Update);
router.route('/').get(GetSpecialities);
router.route('/:id').get(GetByIdSpeciality);
router.route('/delete/:id').delete(DeleteById);

module.exports = router;