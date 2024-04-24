const path = require("path");

const express = require("express");

const shopContoller = require("../controllers/shop");

const router = express.Router();

router.get("/", shopContoller.getIndex);

router.get("/product", shopContoller.getProducts);

router.get("/cart", shopContoller.getCart);

router.get("/checkout", shopContoller.getCheckout);
module.exports = router;
