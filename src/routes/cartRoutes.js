const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.json({ success: true, message: 'Product added to cart!' });
});

router.get('/', (req, res) => {
  res.json({ success: true, message: 'Cart items fetched!' });
});

module.exports = router;