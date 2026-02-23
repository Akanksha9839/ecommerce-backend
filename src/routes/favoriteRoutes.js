const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.json({ success: true, message: 'Added to favourites!' });
});

router.get('/', (req, res) => {
  res.json({ success: true, message: 'Favourites list!' });
});

module.exports = router;