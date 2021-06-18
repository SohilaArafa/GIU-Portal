const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CoursesSchema = new Schema({
    courseId:{
        type: String,
        required: true
    },
    courseName:{
        type: String,
        required: true
    }
});

module.exports = Courses = mongoose.model('courses', CoursesSchema);