const Router = require('express');
const router = Router();
const { Create, GetBlog, GetByIdBlog, DeleteById } = require('../controller/blogController.js');
const { upload } = require('../middleware/multer.js');

router.route('/create').post(upload.single('image'), Create);
router.route('/').get(GetBlog);
router.route('/:id').get(GetByIdBlog);
router.route('/delete/:id').delete(DeleteById);

module.exports = router;