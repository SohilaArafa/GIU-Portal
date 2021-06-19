const express = require('express');
const router = express.Router();

// Course Model
const Course = require('../../models/Course');
const User = require('../../models/User');
const StudentTakeCourses = require('../../models/StudentTakeCourses');

// @route   POST api/changepass
// @desc    Create an Item
// @access  Public
router.get('/courses/:TaID', (req, res) => {

  const TaID = req.params.TaID
  Course
    .find({ TaID })
    .then(courses => {
      res.json(courses)
    })
    .catch(err => {
      console.log(err)
      res.status(400).send('Invalid request');
    })

});

router.get('/students/:course', (req, res) => {

  const CourseID = req.params.course

  StudentTakeCourses.find({ CourseID })
    .then(Enrollments => res.json(Enrollments))
    .catch(err => res.status(400).send('Invlaid request'))

 
});

router.get('/grades/:SemesterNumber/:SID', (req, res) => {

  const SID = req.params.SID
  const SemesterNumber = req.params.SemesterNumber

  StudentTakeCourses.find({ SID, SemesterNumber })
    .then(Enrollments => res.json(Enrollments))
    .catch(err => res.status(400).send('Invlaid request'))
 
});


module.exports = router; 