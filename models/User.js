const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UsersSchema = new Schema({
    fname:{
        type: String,
        required: true
    },
    lname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    dob:{
        type: Date,
        required: true
    },
    profile:{
        type: String,
        required: true
    },
});

module.exports = User = mongoose.model('user', UsersSchema);