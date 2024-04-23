const product = [];

module.exports = class Product {
  constructor(title) {
    this.title = title; //product name
  }

  save() {
    product.push(this);
  }

  static fetchAll() {
    return product;
  }
};
