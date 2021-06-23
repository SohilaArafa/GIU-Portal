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
        type: mongoose.Decimal128, 
        required: true
    },
    SemesterNumber : {
        type: String,
        required: true 
    }, 
    Student: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    Course: { type: mongoose.Schema.Types.ObjectId, ref: 'course' }
});

module.exports = StudentTakeCourses = mongoose.model('StudentTakeCourses', StudentTakeCoursesSchema);