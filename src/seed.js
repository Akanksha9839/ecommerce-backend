require('dotenv').config();

const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const mongoose = require('mongoose');
const Product = require('./models/Product');

console.log('MONGO_URI from env:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to DB for seeding');

    try {
    
      const deleteResult = await Product.deleteMany({});
      console.log(`Deleted ${deleteResult.deletedCount} old products`);

      const products = [
        { name: 'Smartphone XYZ Pro', price: 29999, category: 'electronics', image: 'https://example.com/smartphone.jpg', description: '5G phone' },
        { name: 'Wireless Earbuds', price: 2999, category: 'electronics', image: 'https://example.com/earbuds.jpg', description: 'Noise cancelling' },
        { name: 'Men Casual Shirt', price: 899, category: 'clothing', image: 'https://example.com/shirt.jpg', description: 'Cotton shirt' },
        { name: 'Women Kurti', price: 1299, category: 'clothing', image: 'https://example.com/kurti.jpg', description: 'Printed kurti' },
        { name: 'Python Book', price: 499, category: 'books', image: 'https://example.com/python.jpg', description: 'Beginner guide' },
      ];

      const inserted = await Product.insertMany(products);
      console.log(`Inserted ${inserted.length} sample products!`);

      process.exit(0);
    } catch (err) {
      console.error('Seeding failed:', err.message);
      console.error('Full error:', err);
      process.exit(1);
    }
  })
  .catch(err => {
    console.error('Connection failed:', err.message);
    process.exit(1);
  });