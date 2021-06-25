const express = require('express');
const router = express.Router();

// Course Model
const mongoose = require('mongoose');
const Course = require('../../models/Course');
const User = require('../../models/User');
const StudentTakeCourses = require('../../models/StudentTakeCourses');
const Schedule = require('../../models/Schedule');

//view Schedule
router.get('/Slot/Location/:SemesterNumber/:SID', (req, res) => {
    const SID = req.params.SID
    const SemesterNumber = req.params.SemesterNumber
  
    Schedule.find({ SID, SemesterNumber  })
      .populate({ path: 'Course', select: 'Name' })
      .exec()
      .then(Enrollments => res.json(Enrollments))
      .catch(err => res.status(400).json({ success: false, error: err }))
   
  });


//Create Schedule
router.post('/CreateSchedule', (req, res) => {

      const ScheduleData = req.body
    
      const Schedule  = new Schedule (ScheduleData );
      Schedule.save(function (err) {
    
        if (err) {
          console.log(err);
          return res.status(400).json({ success: false, error: err })
        }
    
        res.json({ success: 'Schedule Saved', error: null })
    
    
      });
    
    
    })







module.exports = router;


