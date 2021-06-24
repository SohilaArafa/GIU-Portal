const { hash } = require('bcrypt');
const express = require('express');
const router = express.Router();


const mongoose = require('mongoose');





const User = require('../../models/User');


// router.get('/:email&:password', (req, res) => {   
//     User.find({email:req.params.email,password:req.params.password})
//       .then(users => res.json(users)
//       .catch(err => {
//         console.log(err)
//         res.status(400).json({ success: false, error: err });
     

//       })
      
      
// });

// @route   GET api/users
// @desc    Get ALL Users
// @access  Public
router.get('/:email&:password', (req, res) => {
  User.find({ email:req.params.email , password:req.params.password  })
  .then(users => {res.json(users) })
  .catch(err => {
    console.log(err)
    res.status(400).json({ success: false, error: err });
  })
 

});




 
      // result => {
      //   console.log(users.length);
        
        // if (users.length == 1 )
        // {
          
        //    res.json({success : "Updated Successfully", status : 200});

        //   //res.success({success: true})
        //   //return status => res.status(200).json({success: true});
        // }
        // else
        // {
        //    res.json({success : "Updated Successfully", status : 400});

        //   //return err => res.status(400).json({success: false});
        // }
      //}


// router.get('/users',( req, res ) => {
//     res.jason(users)
// })

// router.post('/users' , async( req, res )=> {
//     try{
//         const hashedPassword = await bcrypt.hash(req.body.password, 10)
//         const user = {email: req.body.email , password: req.body.password}
//         users.push(user)
//         res.status(201).send()
   

//     }
//     catch {
//         res.status(500).send()
//     }
// })



module.exports = router; 
