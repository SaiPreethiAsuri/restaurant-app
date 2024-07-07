
const orderController = {
    getOrders: (req, res) => {
        return res.status(200).json({ message: 'Get orders' });
    },
    getOrder: (req, res) => {
        return res.status(200).json({ message: 'Get order' });
    },
    createOrder: (req, res) => {
        return res.status(201).json({ message: 'Create order' });
    },
    updateOrder: (req, res) => {
        return res.status(200).json({ message: 'Update order' });
    },
    deleteOrder: (req, res) => {
        return res.status(200).json({ message: 'Delete order' });
    },
};

module.exports = orderController;
