const express = require('express');
const router = express.Router();

// Course Model
const mongoose = require('mongoose');
const Course = require('../../models/Course');
const User = require('../../models/User');
const StudentTakeCourses = require('../../models/StudentTakeCourses');
const Schedule = require('../../models/Schedule');



router.delete('/:CourseID', (req, res) => {

    const _CourseID = req.params.CourseID
    Course
      .deleteOne({ _CourseID })
      .then(deleted => res.json(deleted))
      .catch(err => res.status(400).json(err))
  
  })
  
  router.put('/CourseName', (req,res) => {
    
    const { _CourseID, CourseName } = req.body;
  
    Course
      .findOne({ _CourseID })
      .then(enrollment => {
        
        enrollment.CourseName = CourseName
      
        enrollment
          .save()
          .then(response => res.json({ success: 'Course Updated', error: null }))
          .catch(err => res.status(400).json({ success: false, error: err }))
  
      })
      .catch(err => {
        console.log(err) 
        res.status(400).json({ success: false, error: err })
      })
  
    });
  
  
    router.put('/CourseDetails', (req,res) => {
    
      const { _CourseID, CourseDetails } = req.body;
    
      Course
        .findOne({ _CourseID })
        .then(enrollment => {
          
          enrollment.CourseDetails = CourseDetails
        
          enrollment
            .save()
            .then(response => res.json({ success: 'Course Updated', error: null }))
            .catch(err => res.status(400).json({ success: false, error: err }))
    
        })
        .catch(err => {
          console.log(err) 
          res.status(400).json({ success: false, error: err })
        })
    
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
        })

        });



module.exports = router;
      