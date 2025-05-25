const express = require('express');
const router = express.Router();

// Get all products
router.get('/products', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Get all products route"
    });
});

// Create new product
router.post('/product/new', (req, res) => {
    res.status(201).json({
        success: true,
        message: "Create product route"
    });
});

// Get single product
router.get('/product/:id', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Get single product route"
    });
});

module.exports = router;
