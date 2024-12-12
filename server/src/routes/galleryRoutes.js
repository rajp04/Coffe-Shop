const Router = require('express');
const router = Router();
const { upload } = require('../middleware/multer.js');
const { Create, GetGallery, GetByIdGallery } = require('../controller/galleryController.js');

router.route('/create').post(upload.single('image'), Create);
router.route('/').get(GetGallery);
router.route('/:id').get(GetByIdGallery);

module.exports = router;