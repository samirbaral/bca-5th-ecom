const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Route imports
const productRoute = require('./routes/productRoutes');
const userRoute = require('./routes/userRoute');

app.use('/api/v1', productRoute);
app.use('/api/v1', userRoute);

module.exports = app;
