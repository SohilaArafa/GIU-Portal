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
    },
    courseGrade:{
        type: Number,
        required: true
    }
});

const coursesModel=mongoose.model('courses',CoursesSchema);

module.exports = coursesModel;

//module.exports = Courses = mongoose.model('courses', CoursesSchema);




