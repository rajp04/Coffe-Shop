const Router = require('express');
const router = Router();
const { Create, GetBooking, GetById } = require('../controller/bookingController.js')

router.route('/create').post(Create);
router.route('/').get(GetBooking);
router.route('/:id').get(GetById);

module.exports = router;