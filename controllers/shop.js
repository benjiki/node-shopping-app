const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((product) => {
    res.render("shop/product-list", {
      prods: product,
      pageTitle: "ALl products",
      path: "/products",
      hasProducts: product.length > 0,
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((product) => {
    res.render("shop/index", {
      prods: product,
      pageTitle: "Shop",
      path: "/",
      hasProducts: product.length > 0,
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart",
  });
};
exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
  });
};
