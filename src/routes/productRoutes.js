const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ success: true, message: 'All products endpoint working!' });
});

router.get('/:category', (req, res) => {
  const category = req.params.category;
  res.json({ success: true, category, message: `Products in category: ${category}` });
});


module.exports = router;