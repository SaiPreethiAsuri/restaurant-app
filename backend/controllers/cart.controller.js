
const cartController = {
    index: (req, res) => {
        return res.status(200).json({ message: 'Get cart' });
    },
    add: (req, res) => {
        return res.status(201).json({ message: 'Add to cart' });
    },
    update: (req, res) => {
        return res.status(200).json({ message: 'Update cart' });
    },
    delete: (req, res) => {
        return res.status(200).json({ message: 'Delete cart' });
    },
};

module.exports = cartController;
