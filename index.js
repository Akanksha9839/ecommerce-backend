
require('dotenv').config();

const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);  

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 5000;


console.log('MONGO_URI from env:', process.env.MONGO_URI || 'NOT FOUND IN .env');


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected Successfully! 🎉'))
  .catch(err => {
    console.error('MongoDB Connection Failed:', err.message);
    console.error('Full error:', err);
  });


app.use('/api/products', require('./src/routes/productRoutes'));
app.use('/api/cart', require('./src/routes/cartRoutes'));
app.use('/api/favorites', require('./src/routes/favoriteRoutes'));


app.get('/', (req, res) => {
  res.send('E-commerce Backend Running 🚀 | Port: ' + PORT);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


process.on('SIGTERM', () => {
  console.log('SIGTERM received. Closing server...');
  process.exit(0);
});