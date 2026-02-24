const dns = require('node:dns/promises');
dns.setServers(['8.8.8.8', '8.8.4.4']);

require('dotenv').config();

const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`API Docs: http://localhost:${PORT}/api-docs`);
    });
  })
  .catch(err => {
    console.error('Failed to start server:', err.message);
  });