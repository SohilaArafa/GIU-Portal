const express = require('express');
const router = express.Router();
const jwt = require ('jsonwebtoken');

// // User Model
// const User = require('../../models/User');
// const mongoose = require('mongoose');
// const password = require('../../models/User');
// const { update } = require('../../models/User');

const password =require ("../models/User");


// router.update('/email', (req, res) => {
//   const _id = req.params.id
//   StudentTakeCourses
//     .deleteOne({ _id })
//     .then(update => res.json(update))
//     .catch(err => res.status(400).json(err))
// });




// @route   POST api/changepass
// @desc    Create an Item
// @access  Public
// router.post('/', (req, res) => {
//   const oldPass = new User({
//     name: req.body.name
//   });
  
//   oldPass.save().then(user => res.json(user));
// });


 module.exports = router; 
