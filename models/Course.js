const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
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
    studensEnrolled: {
        type: { type: mongoose.Types.ObjectId, ref: 'StudentTakeCourses' }, 
    },
    CourseDetails : {
        type : String ,
        required: true
    },
    CourseMajor : {
        type : Stirng ,
        required: true
    }
});

module.exports = Courses = mongoose.model('course', CoursesSchema);