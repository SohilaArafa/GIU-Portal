const express = require('express');
const router = express.Router();
const jwt = require ('jsonwebtoken');

// User Model
const User = require('../../models/User');
const mongoose = require('mongoose');
const password = require('../../models/User');
const { update } = require('../../models/User');

const passport = require('passport');
const cors = require('cors');
// router.get('/password/:email', (req, res) => {

  //   const email = req.params.email
  //   Users.find({ email })
  //     .exec()
  //     .catch(err => res.status(400).json({ success: false, error: err }))
   
  // });

// router.post('/user', (req, res) => {

//     const userData = req.body
  
//     const user = new User(userData);
//     user.save(function (err) {
  
//       if (err) {
//         console.log(err);
//         return res.status(400).json({ success: false, error: err })
//       }
  
//       res.json({ success: 'User data Saved', error: null })
//     }
  
//     )
//   });



  router.put('/updatePassword', cors(), (req, res) =>{

    const user = req.user
    console.log(user)

    if (!user) return res.json({ success: false, error: 'You must be logged in to change password' })

    const newPassword= req.body.newPassword;
    const password = req.body.oldPassword;

    console.log(user)
    console.log(password, newPassword)

    if (password == user.password) {

      user.password = newPassword
      user
        .save()
        .then(response => res.json({ success: 'password changed successfully' , error: null }))     
        .catch(err => res.json({ success: false, error: err }))


    } else {

      res.json({ success: false, error: 'Passwords don\'t match' })
    
    }
    
      // User.findOne({ email: user.email })
      //     .then(passwordToUpdate =>{
      //     passwordToUpdate.password = newPassword;
      //     passwordToUpdate.save()})
    
      //    if (err) {
      //     console.log(err);
      //     return res.status(400).json({ success: false, error: err })
      //   }
    
      //   res.json({ success: 'password Updated', error: null })
        
  });


router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    delete  req.user.password
    res.json(req.user);
  });

// router.post('/login' , (req,res) => {
//   const { email, password  } = req.body;

//   User.findOne({ email })
//   .then(user => {

//         if(email == User.email && password == User.password){
            

//         } 

//       if (err) {
//           console.log(err);
//           return res.status(400).json({ success: false, error: err })
//         }
        
//         res.json({ success: 'password Updated', error: null })
//     }) ;
// })












 module.exports = router ;
 
