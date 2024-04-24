const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductsFromfile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title; //product name
    this.imageUrl = imageUrl;
    this.description = description; //url of
    this.price = price; //price in USD
  }

  save() {
    getProductsFromfile((product) => {
      product.push(this);
      fs.writeFile(p, JSON.stringify(product), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromfile(cb);
  }
};
