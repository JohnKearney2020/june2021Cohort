
const http = require('http');
const express = require('express');
const tripDB = require('./model/trip');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// set up the local server
const hostname = '127.0.0.1';
const port = 3000;

// Set up static folder to access things like images
app.use(express.static('./public'))

// ===============================================================================
//                              decode json body data
// ===============================================================================
app.use(express.json()); 

// ===============================================================================
// decode 'URL Encoded' form data
// ===============================================================================
// If your frontend has forms
app.use(express.urlencoded({ extended: false }))


// ===============================================================================
//                                    Routes
// ===============================================================================
app.get('/', (req,res) => {
  res.render('home', {
    title: "Home",
    trips: tripDB
  })
})

app.get('/new', (req,res) => {
  res.render('new', {
    title: "New Trip"
  })
})

// tell node to use the express app to handle all of our requests
const server = http.createServer(app);

// start the server
server.listen(port, hostname, () => {
  console.log(`Sever running at http://${hostname}:${port}/`);
})
