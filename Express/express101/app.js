const http = require('http');
const express = require('express');
const db = require('./db');

const app = express();

// ===============================================================================
//                             Template Engine / View Engine
// ===============================================================================
// set method is used to set express settings
app.set('view engine', 'ejs');
app.set('views', 'views'); // point express to where our templates are stored (what folder they are in)


const hostname = '127.0.0.1';
const port = 3000;

// tell node to use the express app to handle all of our requests
const server = http.createServer(app);

// ===============================================================================
//                                  route handlers
// ===============================================================================
app.get('/', (req, res) => {
  // res.send('Home Page');
  // Templates
  res.render('home', {
    // "title" and "special" are variables used in our 'home' view
    title: "JJ's Diner",
    special: "All the bacon you can have!",
    // user: null
    user: { name: "John Kearney" }
  }) // name of our view, 
})

app.get('/menu', (req,res) => {
  res.render('menu', {
    title: "JJ's menu",
    specials: db.specials
  })
})

app.get('/menu/:id', (req, res) => {
  // get the id from the param
  // get the data from db.specials based on that id
  const foundSpecial = db.specials.find((eachSpecial) => eachSpecial.id === Number(req.params.id));

  // render the template
  res.render('menuItem', {
    title: "JJ's Menu",
    special: foundSpecial
  })
})

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/friends', (req, res) => {
  // res.json({ pancakes: true }) // notice we are passing an object. That object will get converted to JSON
  // pancakes will become "pancakes", per the JSON standard
  res.json(db.friends);
})
// Params
app.get('/api/friends/:handle', (req, res) => {
  // console.log(typeof req.params.handle);
  // console.log('TEST CLG');
  // res.json(req.params.handle);
  const foundFriend = db.friends.find(eachFriend => eachFriend.name.toLowerCase() === req.params.handle.toLowerCase());
  // console.log(foundFriend);
  if(!foundFriend){
    res.status(404);
    res.json('Friend not found :(');
  } else {
    res.json(foundFriend);
  }
})

app.get('/*', (req, res) => {
  res.status(404);
  res.send('Not Found - Try again');
})

server.listen(port, hostname, () => {
  console.log(`Sever running at http://${hostname}:${port}/`);
})








// ================================
// Old way of setting up a server
// ================================
// const http = require('http');

// const server = http.createServer((req, res) => {
//   // console.log(req.url);
//   if(req.url === '/'){
//     res.setHeader('Content-Type', 'text/plain')
//     res.statusCode = 200;
//     res.end('Home Page!');
//   } else if(req.url === '/hello'){
//     res.setHeader('Content-Type', 'text/plain')
//     res.statusCode = 200;
//     res.end('Hello World');
//   } else {
//     res.setHeader('Content-Type', 'text/plain')
//     res.statusCode = 404
//     res.end('Not Found');
//   }

// })

// server.listen(3000, '127.0.0.1')
