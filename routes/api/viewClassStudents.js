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

router.post('/course', (req, res) => {

  const courseData = req.body

  const course = new Course(courseData);
  course.save(function (err) {

    if (err) {
      console.log(err);
      return res.status(400).json({ success: false, error: err })
    }

    res.json({ success: 'Course Saved', error: null })


  });


})

router.post('/student', (req, res) => {

  const studentData = req.body

  const student = new User(studentData);
  student.save(function (err) {

    if (err) {
      console.log(err);
      return res.status(400).json({ success: false, error: err })
    }

    res.json({ success: 'Student Saved', error: null })


  });


})

router.post('/', (req, res) => {

  const studentTakeCoursesData = req.body

  const studentTakeCourses = new StudentTakeCourses(studentTakeCoursesData);
  studentTakeCourses.save(function (err) {

    if (err) {
      console.log(err);
      return res.status(400).json({ success: false, error: err })
    }

    res.json({ success: 'Enrollment Saved', error: null })


  });


})


module.exports = router; 