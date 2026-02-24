const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

/**
 * @swagger
 * /cart:
 *   post:
 *     summary: Add product to cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId: { type: string }
 *               productId: { type: string }
 *               quantity: { type: number }
 *     responses:
 *       201:
 *         description: Product added to cart
 */
router.post('/', async (req, res) => {
  const { userId, productId, quantity = 1 } = req.body;

  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, products: [] });
    }

    const existingItem = cart.products.find(item => item.productId.toString() === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.products.push({ productId, quantity });
    }

    await cart.save();
    res.status(201).json({ message: 'Added to cart', cart });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * @swagger
 * /cart/{userId}:
 *   get:
 *     summary: Get user's cart
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cart items with populated products
 */
router.get('/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId })
      .populate('products.productId');
    res.json(cart ? cart.products : []);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;