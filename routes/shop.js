const path = require("path");

const express = require("express");

const shopContoller = require("../controllers/shop");

const router = express.Router();

router.get("/", shopContoller.getIndex);

router.get("/product", shopContoller.getProducts);

router.get("/products/:productId", shopContoller.getProduct);

router.get("/cart", shopContoller.getCart);
router.post("/cart", shopContoller.postCart);
router.get("/checkout", shopContoller.getCheckout);

router.get("/orders", shopContoller.getOrders);

module.exports = router;
