const express = require("express");
const router = express.Router();
const productController = require("../controller/product");

router.route("/").get(productController.home);

module.exports = router;
