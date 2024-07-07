const express = require('express');
const router = express.Router();
const cart = require('../controllers/cart.controller');

router.get('/', cart.index);
router.post('/:id', cart.add);
router.put('/:id', cart.update);
router.delete('/:id', cart.delete);

module.exports = router;
