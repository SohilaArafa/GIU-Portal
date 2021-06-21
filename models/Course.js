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
<<<<<<< HEAD
=======
    studensEnrolled: {
        type: { type: mongoose.Types.ObjectId, ref: 'StudentTakeCourses' }, 
    }
>>>>>>> f871736b9dac279b498d22ab88cbce817e7e48b7
});

module.exports = Courses = mongoose.model('course', CoursesSchema);