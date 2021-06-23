const express = require('express');
const router = express.Router();

const Course = require('../../models/Course');
const User = require('../../models/User');
const viewSchedule = require('../../models/viewSchedule');

router.get('/Schedule/:SID', (req, res) => {

    const SID = req.params.SID
    viewSchedule.find({ SID })
      .then(Schedule => { res.json(Schedule)
      })
      .catch(err => {
        console.log(err)
        res.status(400).send('Invalid request');
      })
  
  });

  router.post('/Schedule/:SID/:AdminID', (req, res) => {

    const SID = req.params.SID
    const AdminID = req.params.AdminID

    viewSchedule.find({ SID , AdminID})
      .then(Schedule => { res.json(Schedule)
      })
      .catch(err => {
        console.log(err)
        res.status(400).send('Invalid request');
      })
  
  });

    
  module.exports = router; 
