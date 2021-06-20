const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CoursesSchema = new Schema({
    Name:{
        type: String,
        required: true
    },
    CourseID:{
        type: String,
        required: true
    },
    TaID : {
        type: String, 
        required: true
    },
    studensEnrolled: {
        type: { type: ObjectId, ref: 'StudentTakeCourses' }, 
    }
});

module.exports = Courses = mongoose.model('course', CoursesSchema);