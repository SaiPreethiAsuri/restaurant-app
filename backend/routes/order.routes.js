const express = require('express');
const router = express.Router();
const order = require('../controllers/order.controller');

router.get('/:userId', order.getOrders);
router.post('/', order.createOrder);
router.put('/:id', order.updateOrder);
router.delete('/:id', order.deleteOrder);

module.exports = router;
