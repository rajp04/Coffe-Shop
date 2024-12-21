const Router = require('express');
const router = Router();
const { upload } = require('../middleware/multer.js');
const { Create, GetGallery, GetByIdGallery, Update, DeleteById } = require('../controller/galleryController.js');

router.route('/create').post(upload.single('image'), Create);
router.route('/update/:id').put(upload.single('image'), Update);
router.route('/').get(GetGallery);
router.route('/:id').get(GetByIdGallery);
router.route('/delete/:id').delete(DeleteById);

module.exports = router;