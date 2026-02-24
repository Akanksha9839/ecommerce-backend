const express = require('express');
const router = express.Router();
const Favorite = require('../models/Favorite');

/**
 * @swagger
 * /favorites:
 *   post:
 *     summary: Add to favorites
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId: { type: string }
 *               productId: { type: string }
 *     responses:
 *       201:
 *         description: Added to favorites
 */
router.post('/', async (req, res) => {
  const { userId, productId } = req.body;

  try {
    let favorites = await Favorite.findOne({ userId });
    if (!favorites) {
      favorites = new Favorite({ userId, products: [] });
    }

    if (!favorites.products.includes(productId)) {
      favorites.products.push(productId);
      await favorites.save();
    }

    res.status(201).json({ message: 'Added to favorites' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * @swagger
 * /favorites/{userId}:
 *   get:
 *     summary: Get user's favorites
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of favorite products
 */
router.get('/:userId', async (req, res) => {
  try {
    const favorites = await Favorite.findOne({ userId: req.params.userId })
      .populate('products');
    res.json(favorites ? favorites.products : []);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;