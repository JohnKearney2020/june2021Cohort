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

app.get('/ceos', (req,res) => {
  res.render('ceo-list', {
    title: "List of CEOs",
    ceoList: db
  })
})

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