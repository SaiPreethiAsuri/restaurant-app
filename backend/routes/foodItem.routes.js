const express = require('express');
const router = express.Router();
const foodItem = require('../controllers/foodItem.controller');

router.get('/all', foodItem.getFoodItems);
router.post('/create', foodItem.createFoodItem);
router.put('/update/:itemId', foodItem.updateFoodItem);
router.get('/:itemId', foodItem.getFoodItem);
router.delete('/:itemId', foodItem.deleteFoodItem);

module.exports = router;
