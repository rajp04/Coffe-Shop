const Router = require('express');
const router = Router();
const { Create, Update, GetBanner } = require('../controller/bannerController.js')
const { upload } = require('../middleware/multer.js');

router.route('/create').post(upload.single('image'), Create);
router.route('/update/:id').put(upload.single('image'), Update);
router.route('/').get(GetBanner);

module.exports = router;