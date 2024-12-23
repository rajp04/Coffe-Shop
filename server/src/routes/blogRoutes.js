const Router = require('express');
const router = Router();
const { Create, GetBlog, GetByIdBlog, DeleteById, FilterByTitle, Update } = require('../controller/blogController.js');
const { upload } = require('../middleware/multer.js');

router.route('/create').post(upload.single('image'), Create);
router.route('/update/:id').put(upload.single('image'), Update);
router.route('/').get(GetBlog);
router.route('/:id').get(GetByIdBlog);
router.route('/delete/:id').delete(DeleteById);
router.route('/blogs/search').get(FilterByTitle);

module.exports = router;