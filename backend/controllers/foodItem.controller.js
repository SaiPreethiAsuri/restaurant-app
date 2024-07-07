
const foodItemController = {
    getFoodItems: (req, res) => {
        return res.status(200).json({ message: 'Get food items' });
    },
    getFoodItem: (req, res) => {
        return res.status(200).json({ message: 'Get food item' });
    },
    createFoodItem: (req, res) => {
        return res.status(201).json({ message: 'Create food item' });
    },
    updateFoodItem: (req, res) => {
        return res.status(200).json({ message: 'Update food item' });
    },
    deleteFoodItem: (req, res) => {
        return res.status(200).json({ message: 'Delete food item' });
    },
};

module.exports = foodItemController;
