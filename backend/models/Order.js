const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuid } = require('uuid');
const OrderSchema = new Schema({
  orderId: {
    type: String,
    default: uuid
  },
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
  },
  status: {
    type: String,
    default: 'pending'
  }
}, {timestamps: true});

module.exports = mongoose.model('Order', OrderSchema);
