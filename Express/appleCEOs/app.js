const http = require('http');
const express = require('express');
const db = require('./model/db');

const app = express();

// ===============================================================================
//                             Template Engine / View Engine
// ===============================================================================
// set method is used to set express settings
app.set('view engine', 'ejs');
app.set('views', 'views'); // point express to where our templates are stored (what folder they are in)

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
//                              Middleware
// ===============================================================================
// function radLogger(req, res, next) {
//   console.log('SWEET REQUEST BRO:', req.params);
//   next();
// }
// app.use(radLogger);

// tell node to use the express app to handle all of our requests
const server = http.createServer(app);

// ===============================================================================
//                                  route handlers
// ===============================================================================
app.get('/', (req,res) => {
  res.render('home', {
    title: "Apple CEOs"
  })
})


// ==============================
// New CEO Form Routes
// ==============================
app.get('/new', (req, res) => {
  res.render('new', {
    title: "New CEO Form"
  })
})

app.post('/new', (req, res) => {

  const newCeo = {
    id: db.length + 1,
    slug: req.body.ceo_name.toLowerCase().split(' ').join('_'),
    name: req.body.ceo_name,
    year: req.body.ceo_year
  }
  db.push(newCeo);
  console.log('Hit new CEO POST route');
  console.log(newCeo);
  res.status(200);
  res.redirect('/ceos');
})

app.get('/ceos', (req,res) => {
  res.render('ceo-list', {
    title: "List of CEOs",
    ceoList: db
  })
})

// app.get('/ceo-details/:slug', radLogger, (req,res) => {
app.get('/ceo-details/:slug', (req,res) => {
  // fetch a ceo by id
  // OR fetch all ceo's and then filter thru them
  const foundCEO = db.find(eachCEO => eachCEO.slug === req.params.slug);
  // send that data to your view
  if(foundCEO){
    res.render('ceo-details', {
      title: foundCEO.name,
      name: foundCEO.name,
      year: foundCEO.year,
      id: foundCEO.id,
      slug: foundCEO.slug
    })
  } else {
    res.status(404);
    res.send('CEO not found');
  }

})

// start the server
server.listen(port, hostname, () => {
  console.log(`Sever running at http://${hostname}:${port}/`);
})