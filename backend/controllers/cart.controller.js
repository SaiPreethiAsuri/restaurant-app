const Cart = require('../models/Cart');

const cartController = {
  getCartDetails: async (req, res) => {
    try {
      const cartItems = await Cart.findOne({user: req.params.userId});
      return res.status(200).json({data: cartItems});
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  },
  addProduct: async (req, res) => {
    try {
      const userId = req.params.id;
      const {product, quantity} = req.body;
      const cart = await Cart.findOne({user: userId});
      if (!cart) {
        const newCart = await Cart.create({
          user: userId,
          products: [{product, quantity}],
        });
        return res.status(201).json({message: 'Product added to cart', data: newCart});
      }
      const cartDetail = await Cart.findOneAndUpdate(
        {user: userId},
        {
          $push: {products: {product, quantity}},
        },
        {new: true}
      );
      return res.status(201).json({message: 'Product added to cart', data: cartDetail});
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  },
  removeProduct: async (req, res) => {
    try {
      const {productId} = req.params;
      const userId = req.params.id;
      const cart = await Cart.findOne({user: userId});
      if (!cart) {
        return res.status(404).json({message: 'Cart not found'});
      }
      const product = cart.products.find((item) => item.product === productId);
      if (!product) {
        return res.status(404).json({message: 'Product not found in cart'});
      }
      const cartDetail = await Cart.findOneAndUpdate(
        {user: userId},
        {
          $pull: {products: {product: productId}}
        },
        {new: true}
      );
      return res.status(200).json({message: 'Product removed from cart', data: cartDetail});
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  },
  delete: (req, res) => {
    return res.status(200).json({message: 'Delete cart'});
  },
};

module.exports = cartController;
