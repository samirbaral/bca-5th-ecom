const express = require('express');
const router = express.Router();

// Register user
router.post('/register', (req, res) => {
    res.status(201).json({
        success: true,
        message: "User registration route"
    });
});

// Login user
router.post('/login', (req, res) => {
    res.status(200).json({
        success: true,
        message: "User login route"
    });
});

// Get user profile
router.get('/me', (req, res) => {
    res.status(200).json({
        success: true,
        message: "User profile route"
    });
});

module.exports = router;
