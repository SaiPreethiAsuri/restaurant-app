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
  totalAmount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    default: 'USD'
  },
  status: {
    type: String,
    default: 'Ordered'
  }
}, {timestamps: true});

module.exports = mongoose.model('Order', OrderSchema);
