// Handles business logic for products
const productModel = require('../models/productModel');

exports.getAllProducts = (req, res) => {
  const products = productModel.getAllProducts();
  res.json(products);
};

exports.getProductById = (req, res) => {
  const product = productModel.getProductById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

exports.addProduct = (req, res) => {
  const newProduct = productModel.addProduct(req.body);
  res.status(201).json(newProduct);
};
