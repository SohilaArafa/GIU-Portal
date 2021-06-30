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

  router.put('/updatePassword', cors(), (req, res) =>{

    const email = req.body.email
    const newPassword = req.body.newPassword;
    const password = req.body.oldPassword;

    
    User
      .findOne({ email })
      .then(user => {

        if (password == user.password) {

          user.password = newPassword
          user
            .save()
            .then(_ => res.json({ success: 'password changed successfully' , error: null }))     
            .catch(err => res.json({ success: false, error: err }))
    
    
        } else {
    
          res.json({ success: false, error: 'Passwords don\'t match' })
        
        }
        

      }).catch(err => res.json({ success: false, error: err }))


  });


router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    const { fname, lname, dob, profile, email, id, _id } = req.user
    res.json({ fname, lname, dob, profile, email, id, _id });
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
 
