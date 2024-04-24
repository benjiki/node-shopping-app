const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err || !fileContent.length) {
      cb([]); // Return empty array if file doesn't exist or is empty
    } else {
      try {
        const products = JSON.parse(fileContent);
        cb(products);
      } catch (parseError) {
        console.error("Error parsing products JSON:", parseError);
        cb([]); // Return empty array if JSON parse error
      }
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
    getProductsFromFile((product) => {
      product.push(this);
      fs.writeFile(p, JSON.stringify(product), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
