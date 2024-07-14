const express = require('express');
const router = express.Router();
const cart = require('../controllers/cart.controller');

router.get('/:userId', cart.getCartDetails);
router.post('/:id', cart.addProduct);
router.delete('/:productId', cart.removeProduct);
router.delete('/:id', cart.delete);

module.exports = router;
