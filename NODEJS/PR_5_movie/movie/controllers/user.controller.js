const User = require('../models/user.schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Sign Up
const signUp = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword, email });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error signing up user' });
  }
};

// Login
const login = async (req, res) => {
  let { username, password } = req.body;
  
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    let token = jwt.sign({ userId: user._id }, 'secretKey');
    res.json({ message: 'Logged in successfully', token });
 
    res.status(500).json({ error: 'Login failed' });

};

// Delete User
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user' });
  }
};

module.exports = { signUp, login, deleteUser };
