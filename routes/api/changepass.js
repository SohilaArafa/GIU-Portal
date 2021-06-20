const express = require('express');
const router = express.Router();

// Item Model
const User = require('../../models/User');

// @route   POST api/changepass
// @desc    Create an Item
// @access  Public
router.post('/', (req, res) => {
  const oldPass = new User({
    name: req.body.name
  });
  
  oldPass.save().then(user => res.json(user));
});

module.exports = router; 