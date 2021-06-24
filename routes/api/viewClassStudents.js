const express = require('express');
const router = express.Router();

// Course Model
const mongoose = require('mongoose');
const Course = require('../../models/Course');
const User = require('../../models/User');
const StudentTakeCourses = require('../../models/StudentTakeCourses');
const { Router } = require('express');

// @route   POST api/viewClassStudents
// @desc    Create an Item
// @access  Public

//Getting courses by the Ta id
router.get('/courses/:TaID', (req, res) => {

  const TaID = req.params.TaID
  Course
    .find({ TaID })
    .then(courses => {
      res.json(courses)
    })
    .catch(err => {
      console.log(err)
      res.status(400).json({ success: false, error: err });
    })

});

// ta uploading/updating a grade
router.put('/updateGrade', (req,res) => {
  
  const { _id, CourseGrade } = req.body;

  console.log(req.body)

  StudentTakeCourses
    .findOne({ _id })
    .then(enrollment => {
      
      enrollment.CourseGrade = CourseGrade.$numberDecimal
      enrollment
        .save()
        .then({ success: 'Grade Updated', error: null })
        .catch(err => res.status(400).json({ success: false, error: err }))

    })
    .catch(err => {
      console.log(err) 
      res.status(400).json({ success: false, error: err })
    })

  });
  

//getting students taking this specific course
router.get('/students/:course', (req, res) => {

  const CourseID = req.params.course

  Course
    .findOne({ CourseID })
    .then(course => {

      StudentTakeCourses
      .find({ CourseID })
      .populate({ path: 'Student', select: 'fname lname' })
      .exec()
      .then(students => res.json({ students, course }))
      .catch(err => res.status(400).json({ success: false, error: err }))
      
    })
    .catch(err => res.status(400).json({ success: false, error: err }))

 
});

//getting grades of a specific student in a specific semester
router.get('/grades/:SemesterNumber/:SID', (req, res) => {

  const SID = req.params.SID
  const SemesterNumber = req.params.SemesterNumber

  StudentTakeCourses.find({ SID, SemesterNumber })
    .then(Enrollments => res.json(Enrollments))
    .catch(err => res.status(400).json({ success: false, error: err }))
 
});

//getting course details using the courseid,semester,major,and student id
router.get('/CourseDetails/:CourseID/:SemesterNumber:/CourseMajor:/SID', (req, res) => {

  const SID = req.params.SID
  const SemesterNumber = req.params.SemesterNumber
  //const CourseID = req.params.CourseID
  const CourseMajor = req.params.CourseMajor

  StudentTakeCourses.find({ SID, SemesterNumber , CourseMajor  })
    .populate({ path: 'Course', select: 'Name' })
    .exec()
    .then(Enrollments => res.json(Enrollments))
    .catch(err => res.status(400).json({ success: false, error: err }))
 
});


//creating a new course
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

//creating a new user
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

//enrolling students
router.post('/', (req, res) => {

  const studentTakeCoursesData = req.body
  const studentTakeCourses = new StudentTakeCourses({ ...studentTakeCoursesData });

  studentTakeCourses
    .save(function (err) {

      if (err) {
        console.log(err);
        return res.status(400).json({ success: false, error: err })
      }

      res.json({ success: 'Enrollment Saved', error: null })


   });
})

//deleting from student enrollments
router.delete('/:id', (req, res) => {

  const _id = req.params.id
  StudentTakeCourses
    .deleteOne({ _id })
    .then(deleted => res.json(deleted))
    .catch(err => res.status(400).json(err))

})




module.exports = router; 