const express = require('express');
const router = express.Router();

// Course Model
const mongoose = require('mongoose');
const Course = require('../../models/Course');
const User = require('../../models/User');
const StudentTakeCourses = require('../../models/StudentTakeCourses');
const Schedule = require('../../models/Schedule');

// @route   POST api/StudentTakeCourses
// @desc    Create an Item
// @access  Public
router.get('/CourseID/:SID', (req, res) => {

  const SID = req.params.SID
  StudentTakeCourses
    .find({ SID })
    .then(courses => {
      res.json(courses)
    })
    .catch(err => {
      console.log(err)
      res.status(400).json({ success: false, error: err });
    })

});


router.get('/Slot/Location/:SemesterNumber/:SID/:CourseID', (req, res) => {
    const SID = req.params.SID
    const CourseID= req.params.CourseID
    const SemesterNumber = req.params.SemesterNumber
  
    Schedule.find({ SID, SemesterNumber , CourseID })
      .populate({ path: 'Course', select: 'Name' })
      .exec()
      .then(Enrollments => res.json(Enrollments))
      .catch(err => res.status(400).json({ success: false, error: err }))
   
  });


router.post('/', (req, res) => {

    const studentTakeCoursesData = req.body
    const studentTakeCourses = new StudentTakeCourses({ ...studentTakeCoursesData });
  
    studentTakeCourses.save(function (err) {
  
      if (err) {
        console.log(err);
        return res.status(400).json({ success: false, error: err })
      }
  
      res.json({ success: 'Enrollment Saved', error: null })
  
  
    })

    });




router.get('/students/:course', (req, res) => {

  const CourseID = req.params.course

  StudentTakeCourses
    .find({ CourseID })
    .populate({ path: 'Student', select: 'fname lname' })
    .exec()
    .then(Enrollments => res.json(Enrollments))
    .catch(err => res.status(400).json({ success: false, error: err }))

 
});

router.get('/grades/:SemesterNumber/:SID', (req, res) => {

  const SID = req.params.SID
  const SemesterNumber = req.params.SemesterNumber

  StudentTakeCourses.find({ SID, SemesterNumber })
    .populate({ path: 'Course', select: 'Name' })
    .exec()
    .then(Enrollments => res.json(Enrollments))
    .catch(err => res.status(400).json({ success: false, error: err }))
 
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

router.post('/user', (req, res) => {

  const userData = req.body

  const user = new User(userData);
  user.save(function (err) {

    if (err) {
      console.log(err);
      return res.status(400).json({ success: false, error: err })
    }

    res.json({ success: 'User data Saved', error: null })


  });


})

router.post('/', (req, res) => {

  const studentTakeCoursesData = req.body
  const studentTakeCourses = new StudentTakeCourses({ ...studentTakeCoursesData });

  studentTakeCourses.save(function (err) {

    if (err) {
      console.log(err);
      return res.status(400).json({ success: false, error: err })
    }

    res.json({ success: 'Enrollment Saved', error: null })


  });
})

router.delete('/:id', (req, res) => {

  const _id = req.params.id
  StudentTakeCourses
    .deleteOne({ _id })
    .then(deleted => res.json(deleted))
    .catch(err => res.status(400).json(err))

})




module.exports = router;


