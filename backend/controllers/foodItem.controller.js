const FoodItem = require('../models/foodItem');

const uploadImage = (image) => {
  return new Promise((resolve, reject) => {
    const imagePath = 'uploads/' + image.name;
    const uploadPath = __dirname + '/../public/' + imagePath;
    image.mv(uploadPath, (error) => {
      if (error) {
        reject({message: 'Error uploading image', error});
      } else {
        resolve(imagePath);
      }
    });
  });
};

const foodItemController = {
  getFoodItems: async (req, res) => {
    try {
      const foodItems = await FoodItem.find();
      return res.status(200).json({message: 'Get food items', data: foodItems});
    } catch (error) {
      return res.status(500).json({message: 'Error getting food items', error});
    }
  },
  getFoodItem: async (req, res) => {
    try {
      const foodItem = await FoodItem.findOne({itemId: req.params.itemId});
      return res.status(200).json({message: 'Get food item', data: foodItem});
    } catch (error) {
      return res.status(500).json({message: 'Error getting food item', error});
    }
  },
  createFoodItem: async (req, res) => {
    try {
      let {name, description, price, image} = req.body;
      // Upload Image if image is not string in uploads folder and set image path to image
      if (typeof image !== 'string') {
        image = await uploadImage(image);
      }
      const foodItem = await FoodItem.create({name, description, price});
      return res.status(201).json({message: 'Create food item', data: foodItem});
    } catch (error) {
      return res.status(500).json({message: 'Error creating food item', error});
    }
  },
  updateFoodItem: async (req, res) => {
    try {
      let {name, description, price, image} = req.body;
      // Upload Image if image is not string in uploads folder and set image path to image
      if (typeof image !== 'string') {
        image = await uploadImage(image);
      }
      const foodItem = await FoodItem.findOneAndUpdate({itemId: req.params.itemId}, {
        $set: {
          name,
          description,
          price
        }
      }, {
        new: true
      });
      if (!foodItem) return res.status(404).json({message: 'Food item not found'});
      return res.status(200).json({message: 'Update food item', data: foodItem});
    } catch (error) {
      return res.status(500).json({message: 'Error updating food item', error});
    }
  },
  deleteFoodItem: async (req, res) => {
    try {
      const foodItem = await FoodItem.findOneAndDelete({itemId: req.params.itemId});
      return res.status(200).json({message: 'Delete food item', data: foodItem});
    } catch (error) {
      return res.status(500).json({message: 'Error deleting food item', error});
    }
  },
};

module.exports = foodItemController;
