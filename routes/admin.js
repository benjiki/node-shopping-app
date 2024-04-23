const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const product = [];

router.get("/add-product", (req, res, next) => {
  console.log("what do u want man");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res) => {
  product.push({ title: req.body.title });
  res.redirect("/");
});
exports.routes = router;
exports.products = product;
// module.exports = router;
