const express = require("express");
const router = express.Router();
const { upload } = require('../middleware/multer.js');
const { Create, GetService } = require("../controller/serviceController.js");

router.route('/create').post(
  upload.fields([
    { name: "image" },
    { name: "subImage" }
  ]),
  Create
);
router.route('/').get(GetService)

module.exports = router;
