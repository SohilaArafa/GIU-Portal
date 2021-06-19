const express = require('express');
const router = express.Router();

// Course Model
const Course = require('../../models/Course');
const User = require('../../models/User');
const StudentTakeCourses = require('../../models/StudentTakeCourses');

// @route   POST api/changepass
// @desc    Create an Item
// @access  Public
router.get('/', (req,res) => {
  User.find({})

});

router.get('/', (req, res) => {
  Course.find({TaID: req.body.TaID})
    .then(Course => res.json(Course))
 
});

router.get('/', (req,res) => {
  StudentTakeCourses.find({CourseID: req.Course.TaID})
      .then(StudentTakeCourses => res.json(StudentTakeCourses)) 
    
});

module.exports = router; 