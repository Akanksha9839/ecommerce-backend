const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const favoriteRoutes = require('./routes/favoriteRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ecommerce Backend API',
      version: '1.0.0',
      description: 'Backend for Ecommerce Capstone Project'
    },
    servers: [{ url: `http://localhost:${process.env.PORT || 3000}` }]
  },
  apis: ['./routes/*.js']
};

const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Routes
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/favorites', favoriteRoutes);

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

module.exports = app;