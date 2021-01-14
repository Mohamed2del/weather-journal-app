// Setup empty JS object to act as endpoint for all routes

projectData = [];

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3000;

app.get('/all', (req, res) => {
  console.log(req.body);
  res.send(projectData);
  projectData = [];
});

app.post('/add', (req, res) => {
  console.log(req.body);
  newEntry = {
    data: req.body.date,
    temp: req.body.temp,
    feeling: req.body.feeling,
  };
  projectData.push(newEntry);
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
