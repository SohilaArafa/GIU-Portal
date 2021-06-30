const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Courses Schema
const CoursesSchema = new Schema({
    CourseName:{
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
    CourseDetails : {
        type : String ,
        required: false
    },
    studensEnrolled: {
        type: { type: mongoose.Types.ObjectId, ref: 'StudentTakeCourses' }, 
    }
});

module.exports = Courses = mongoose.model('course', CoursesSchema);