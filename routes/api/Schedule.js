const express = require('express');
const router = express.Router();

// Course Model
const mongoose = require('mongoose');
const Schedule = require('../../models/Schedule');

//getting semester by adminID
router.get('/semester/:AdminID', (req, res) => {

  const AdminID = req.params.AdminID

  Schedule.find({ AdminID})
    .then(Enrollments => res.json(Enrollments))
    .catch(err => res.status(400).json({ success: false, error: err }))
 
});

//view Schedule
router.get('/view_schedule/:SemesterNumber/:SID', (req, res) => {
    const SID = req.params.SID
    const SemesterNumber = req.params.SemesterNumber
  
    Schedule.find({ SID, SemesterNumber  })
      .populate({ path: 'Course', select: 'Name' })
      .exec()
      .then(Enrollments => res.json(Enrollments))
      .catch(err => res.status(400).json({ success: false, error: err }))
   
  });


//create schedule
router.post('/schedule', (req, res) => {

  const scheduleData = req.body

  const schedule = new Schedule(scheduleData);
  schedule.save(function (err) {

    if (err) {
      console.log(err);
      return res.status(400).json({ success: false, error: err })
    }

    res.json({ success: 'Schedule Saved', error: null })


  });

})





module.exports = router;






  




