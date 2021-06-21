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
<<<<<<< HEAD
    },
=======
    }
>>>>>>> f871736b9dac279b498d22ab88cbce817e7e48b7
});

module.exports = User = mongoose.model('user', UsersSchema);