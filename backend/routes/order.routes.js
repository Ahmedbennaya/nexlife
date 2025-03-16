
const express = require('express');
const {
  createOrder,
  getOrderById,
  updateOrderToPaid,
  updateOrderStatus,
  getAllOrders,
  getUserOrders
} = require('../controllers/order.controller');
const { protect, admin } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/', protect, createOrder);
router.get('/', protect, admin, getAllOrders);
router.get('/myorders', protect, getUserOrders);
router.get('/:id', protect, getOrderById);
router.put('/:id/pay', protect, updateOrderToPaid);
router.put('/:id/status', protect, admin, updateOrderStatus);

module.exports = router;
