const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const StudentTakeCoursesSchema = new Schema({
    SID:{
        type: String,
        required: true
    },
    CourseID:{
        type: String,
        required: true
    },
    CourseGrade : {
        type: Float32Array, 
        required: true
    },
    SemesterNumber : {
        type: String
        required: true 
    }, 
});

module.exports = StudentTakeCourses = mongoose.model('StudentTakeCourses', StudentTakeCoursesSchema);