const product = [];

exports.getAddProduct = (req, res, next) => {
  // console.log("what do u want man");
  //res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCss: true,
    productCss: true,
    activeAddProduct: true,
  });
};

exports.postViewProduct = (req, res) => {
  product.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  res.render("shop", {
    prods: product,
    pageTitle: "Shop",
    path: "/",
    hasProducts: product.length > 0,
    activeShop: true,
    productCss: true,
  });
};
