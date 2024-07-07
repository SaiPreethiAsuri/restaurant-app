const express = require('express');
const router = express.Router();
const foodItem = require('../controllers/foodItem.controller');

router.get('/', foodItem.getFoodItems);
router.get('/:id', foodItem.getFoodItem);
router.post('/', foodItem.createFoodItem);
router.put('/:id', foodItem.updateFoodItem);
router.delete('/:id', foodItem.deleteFoodItem);

module.exports = router;
