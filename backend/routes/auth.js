const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust the path if necessary

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// ----------------------
// Signup Route
// ----------------------
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists.' });
    }
    
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    
    // Save user to DB
    await newUser.save();
    
    // Generate JWT token
    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: '1h' });
    
    res.status(201).json({ token, user: newUser });
  } catch (error) {
    console.error('Error in /signup:', error);
    res.status(500).json({ message: 'Server error during signup.' });
  }
});

// ----------------------
// Login Route
// ----------------------
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }
    
    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }
    
    // Generate JWT token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    
    res.json({ token, user });
  } catch (error) {
    console.error('Error in /login:', error);
    res.status(500).json({ message: 'Server error during login.' });
  }
});

module.exports = router;
