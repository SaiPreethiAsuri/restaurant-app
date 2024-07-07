const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: 'FoodItem'
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  total: {
    type: Number,
    required: true
  }
}, {timestamps: true});

module.exports = mongoose.model('Cart', CartSchema);
