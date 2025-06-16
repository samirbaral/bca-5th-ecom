const express = require('express');
const router = express.Router();
const { createProduct, getAllProducts, getProductDetails } = require('../controllers/productController');

// Get all products
router.get('/products', getAllProducts);

// Create new product
router.post('/product/new', createProduct);

// Get single product
router.get('/product/:id', getProductDetails);

module.exports = router;
