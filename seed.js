require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

async function seed() {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error('MONGO_URI not found in .env');

    console.log('Connecting with URI:', uri); // Debug

    await mongoose.connect(uri, {
  serverSelectionTimeoutMS: 60000,  // 60 seconds
  socketTimeoutMS: 45000,
  connectTimeoutMS: 30000
});
    console.log('Connected for seeding!');

    await Product.deleteMany({}); // Optional clear

    await Product.insertMany([
      { name: "Smartphone X", price: 34999, description: "5G AMOLED", image: "https://example.com/phone.jpg", category: "electronics" },
      { name: "Cotton T-Shirt", price: 599, description: "Daily wear", image: "https://example.com/tshirt.jpg", category: "clothing" },
      { name: "Gaming Laptop", price: 89999, description: "RTX 3060", image: "https://example.com/laptop.jpg", category: "electronics" },
      { name: "Blue Jeans", price: 1299, description: "Slim fit", image: "https://example.com/jeans.jpg", category: "clothing" }
    ]);

    console.log('Products seeded successfully!');
  } catch (err) {
    console.error('Seeding error:', err.message);
  } finally {
    mongoose.disconnect();
  }
}


seed();