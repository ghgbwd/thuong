const express = require('express')
const { createProductController } = require("../controller/productController");

let router = express.Router();
router.post("/create", createProductController)

module.exports = router;