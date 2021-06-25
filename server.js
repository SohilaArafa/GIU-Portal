const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');
const ChangePassword = require('./routes/api/ChangePassword.js');

// Add path to story using constant
const cors = require('cors')
const Login = require('./routes/api/Login.js');


const items = require('./routes/api/items.js');
const viewClassStudents = require('./routes/api/viewClassStudents.js');

const app = express();



var session = require("express-session")
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());


// Bodyparser Middleware
app.use(bodyParser.json());
app.use(cors());

// db config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected..'))
  .catch(err => console.log(err));



passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'passwd'
  },
  function(email, password, done) {
    User.findOne({ email: email }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});


// User Routes
// Listen for your user story and link to constant created above
app.use('/api/changepass', ChangePassword);
app.use('/api/Login', Login);
app.use('/api/items', items)
app.use('/api/viewClassStudents', viewClassStudents)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server staterd on port ${port}`));