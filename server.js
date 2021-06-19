const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Add path to story using constant
const items = require('./routes/api/items.js');
const changepass = require('./routes/api/changepass.js');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// db config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected..'))
  .catch(err => console.log(err));

// User Routes
// Listen for your user story and link to constant created above
<<<<<<< HEAD
app.use('/api/items', items)
=======
app.use('/api/items', items);
app.use('/api/changepass', changepass);
>>>>>>> 6ed0778f66e5b510440a01a69457a8d34f22c421

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server staterd on port ${port}`));
