const Order = require('../models/order');
const orderController = {
  getOrders: async (req, res) => {
    try {
      const userId = req.params.userId;
      const orders = await Order.find({userId: userId});
      return res.status(200).json({message: 'Get orders', data: orders});
    } catch (error) {
      return res.status(500).json({message: 'Internal server error'});
    }
  },
  createOrder: async (req, res) => {
    try {
      const {userId, items, total} = req.body;
      const order = await Order.create({userId, items, total});
      return res.status(201).json({message: 'Create order', data: order});
    } catch (error) {
      return res.status(500).json({message: 'Internal server error'});
    }
  },
  updateOrder: async (req, res) => {
    try {
      const orderId = req.params.id;
      const {status} = req.body;
      const order = await Order.findOneAndUpdate({orderId: orderId}, {status: status}, {new: true});
      return res.status(200).json({message: 'Update order', data: order});
    } catch (error) {
      return res.status(500).json({message: 'Internal server error'});
    }
  },
  deleteOrder: async (req, res) => {
    try {
      const orderId = req.params.id;
      await Order.findOneAndDelete({orderId: orderId});
      return res.status(204).json({message: 'Delete order'});
    } catch (error) {
      return res.status(500).json({message: 'Internal server error'});
    }
  },
};

module.exports = orderController;
