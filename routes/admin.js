const path = require("path");

const express = require("express");

//const rootDir = require("../util/path");
const adminContoller = require("../controllers/admin");

const router = express.Router();

router.get("/add-product", adminContoller.getAddProduct);

router.post("/add-product", adminContoller.postViewProduct);

router.get("/edit-product/:productId", adminContoller.getEditProduct);

router.get("/products", adminContoller.getProducts);
module.exports = router;
