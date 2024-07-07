const User = require('../models/User');

const userController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    return res.status(200).json({ message: 'Login successful' });
  },
  register: async (req, res) => {
    const { email, password, name } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const newUser = new User({ email, password, name });
    await newUser.save();
    return res.status(201).json({ message: 'User created' });
  },
  logout: async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const updated = await User.updateOne({ email: email }, { lastLogin: Date.now() });
    if (!updated) {
      return res.status(500).json({ message: 'Logout failed' });
    }
    return res.status(200).json({ message: 'Logout successful' });
  },
}

module.exports = userController;
