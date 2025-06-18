const express = require('express');
const productRoutes = require('./routes/productRoutes');
const logger = require('./middleware/logger');

const app = express();

app.use(express.json());
app.use(logger);
app.use('/api/products', productRoutes);

module.exports = app;
