const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Root route
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "API is running successfully"
    });
});

// Route imports
const productRoute = require('./routes/productRoutes');
const userRoute = require('./routes/userRoute');

app.use('/api/v1', productRoute);
app.use('/api/v1', userRoute);

module.exports = app;
