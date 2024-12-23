const Router = require('express');
const { Create, DeleteById, Update, GetByIdTestimonial, GetTestimonial } = require('../controller/testimonialController');
const router = Router();

router.route('/create').post(Create);
router.route('/').get(GetTestimonial);
router.route('/:id').get(GetByIdTestimonial);
router.route('/delete/:id').delete(DeleteById);
router.route('/update/:id').put(Update);

module.exports = router;