const express = require('express');
const router = express.Router();
const jwt = require ('jsonwebtoken');

// User Model
const User = require('../../models/User');
const mongoose = require('mongoose');
const password = require('../../models/User');
const { update } = require('../../models/User');


// router.update('/email', (req, res) => {
//   const _id = req.params.id
//   StudentTakeCourses
//     .deleteOne({ _id })
//     .then(update => res.json(update))
//     .catch(err => res.status(400).json(err))
// });

router.get('/password/:email', (req, res) => {

    const email = req.params.email
    Users.find({ email })
      .exec()
      .catch(err => res.status(400).json({ success: false, error: err }))
   
  });

  router.post('/user', (req, res) => {

    const userData = req.body
  
    const user = new User(userData);
    user.save(function (err) {
  
      if (err) {
        console.log(err);
        return res.status(400).json({ success: false, error: err })
      }
  
      res.json({ success: 'User data Saved', error: null })
    }
  
    )
  });
  router.put('/updatePassword/:email', (req,res) =>{
    const newPassword= req.body.newPassword;
    const email= req.body.email;
    
      users.find({email})
          .then(passwordToUpdate =>{
          passwordToUpdate.password=newPassword;
          passwordToUpdate.save()})
    
         if (err) {
          console.log(err);
          return res.status(400).json({ success: false, error: err })
        }
    
        res.json({ success: 'password Updated', error: null })
        
      });

// @route   POST api/changepass
// @desc    Create an Item
// @access  Public
// router.post('/', (req, res) => {
//   const oldPass = new User({
//     name: req.body.name
//   });
  
//   oldPass.save().then(user => res.json(user));
// });


 module.exports = router ;
 
