const express = require("express");
const router = express.Router();
const { upload } = require('../middleware/multer.js');
const { Create } = require("../controller/serviceController.js");

router.route('/create').post(
  upload.fields([
    { name: "image" },
    { name: "subImage" }
  ]),
  Create
);

module.exports = router;
