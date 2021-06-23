const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const viewScheduleSchema = new Schema({
    SID:{
        type: String,
        required: true
    },

    AdminID : {
        type : String,
        required : true
    },
    Schedule : {
        type: Array, 
        required: true
    },
});

module.exports = StudentTakeCourses = mongoose.model('viewSchedule', viewScheduleSchema);