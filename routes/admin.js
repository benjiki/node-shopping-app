const path = require("path");

const express = require("express");

//const rootDir = require("../util/path");
const productsContoller = require("../controllers/products");

const router = express.Router();

router.get("/add-product", productsContoller.getAddProduct);

router.post("/add-product", productsContoller.postViewProduct);

module.exports = router;
