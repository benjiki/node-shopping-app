const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCss: true,
    productCss: true,
    activeAddProduct: true,
  });
};

exports.postViewProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  const product = Product.fetchAll((product) => {
    res.render("shop/product-list", {
      prods: product,
      pageTitle: "Shop",
      path: "/",
      hasProducts: product.length > 0,
      activeShop: true,
      productCss: true,
    });
  });
};
