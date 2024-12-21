const express = require("express");
const router = express.Router();
const { upload } = require('../middleware/multer.js');
const { Create, GetService, Update, GetByIdService, DeleteById } = require("../controller/serviceController.js");

router.route('/create').post(
  upload.fields([
    { name: "image" },
    { name: "subImage" }
  ]),
  Create
);
router.route('/update/:id').put(
  upload.fields([
    { name: "image" },
    { name: "subImage" }
  ]),
  Update
);
router.route('/').get(GetService)
router.route('/:id').get(GetByIdService)
router.route('/delete/:id').delete(DeleteById)

module.exports = router;
