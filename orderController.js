const express = require('express');
const router = express.Router();
const orderService = require('./orderService');

// Place Order
router.post('/', (req, res) => {
  const { name, email, address, items } = req.body;
  if (!name || !email || !address || !items || !Array.isArray(items)) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const order = orderService.placeOrder({ name, email, address, items });
  res.status(201).json(order);
});

// Get Orders by Email
router.get('/user', (req, res) => {
  const { email } = req.query;
  if (!email) return res.status(400).json({ error: 'Email is required' });
  const userOrders = orderService.getOrderByEmail(email);
  res.json(userOrders);
});

// Get All Active Orders
router.get('/', (req, res) => {
  const activeOrders = orderService.getAllOrders();
  res.json(activeOrders);
});

// Cancel Order
router.post('/cancel', (req, res) => {
  const { email, orderId } = req.body;
  const cancelled = orderService.cancelOrder(email, orderId);
  if (!cancelled) {
    return res.status(404).json({ error: 'Order not found or already cancelled' });
  }
  res.json({ message: 'Order cancelled successfully', order: cancelled });
});

// Modify Address
router.post('/modify-address', (req, res) => {
  const { email, orderId, newAddress } = req.body;
  const updated = orderService.modifyAddress(email, orderId, newAddress);
  if (!updated) {
    return res.status(404).json({ error: 'Order not found or cannot be modified' });
  }
  res.json({ message: 'Address updated successfully', order: updated });
});

module.exports = router;
