const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/products.json');

function readProducts() {
  if (!fs.existsSync(dataPath)) return [];
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
}

function writeProducts(products) {
  fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
}

exports.getAllProducts = () => readProducts();

exports.getProductById = (id) => {
  const products = readProducts();
  return products.find(p => p.id === id);
};

exports.addProduct = (product) => {
  const products = readProducts();
  product.id = String(Date.now());
  products.push(product);
  writeProducts(products);
  return product;
};
