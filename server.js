const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');
const ChangePassword = require('./routes/api/ChangePassword.js');

const cookieParser = require('cookie-parser')
const session = require("express-session")

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;


// Add path to story using constant
const cors = require('cors')
const Login = require('./routes/api/Login.js');


const items = require('./routes/api/items.js');
const viewClassStudents = require('./routes/api/viewClassStudents.js');

const app = express();



passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
  },
  function(email, password, done) {
    User.findOne({ email: email }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }
      if (user.password !== password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  User.findById(user, function(err, user) {
    console.log('deserialize user', err, user)
    done(err, user);
  });
});


// db config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected..'))
  .catch(err => console.log(err));


app.use(cors({ credentials: true }));
app.use(cookieParser());


app.use(session({ 
  cookie: { maxAge: 31536600 },
  secret: "cats", 
  resave: true, 
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("public"));

// Bodyparser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// User Routes
// Listen for your user story and link to constant created above
app.use('/api/changepass', ChangePassword);
app.use('/api/Login', Login);
app.use('/api/items', items)
app.use('/api/viewClassStudents', viewClassStudents)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server staterd on port ${port}`));