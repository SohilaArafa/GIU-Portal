const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ScheduleSchema = new Schema({
    AdminID:{
        type: String,
        required: true
    },
    SID:{
        type: String,
        required: true
    },
    CourseID:{
        type: String,
        required: true,
    },
    SemseterNumber:{
        type: String,
    },
    Location:{
        type: String,
        required: true
    },
    Slot:{
        type: String,
        required: true
    },
    Day:{
        type: String,
        required: true
    },
    
});

module.exports = Schedule = mongoose.model('schedule', ScheduleSchema);