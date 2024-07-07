const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuid } = require('uuid');

const FoodItemSchema = new Schema({
  itemId: {
    type: String,
    default: uuid
  },
  name: {
    type: String,
    required: true
  },
  description: { type: String , required: true },
  price: {
    type: Number,
    required: true
  }
}, {timestamps: true});

module.exports = mongoose.model('FoodItem', FoodItemSchema);
