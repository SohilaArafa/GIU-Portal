const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Add path to story using constant
const items = require('./routes/api/items.js');

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
app.use('/api/items', items)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server staterd on port ${port}`));