// Setup empty JS array to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port = 8000;
const server = app.listen(port, listening);
function listening() {
    console.log('server running');
    console.log(`running on localhost: ${port}`);
}
// GET route
app.get('/all', sendData);

function sendData(request, response) {
    response.send(projectData);
};

// POST route
app.post('/addState', addState);

function addState(req, res) {
    debugger;
    projectData.push(req.body);
    res.send(projectData);
    console.log(projectData);
};