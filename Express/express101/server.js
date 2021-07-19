const http = require('http');
const express = require('express');
const db = require('./db');

const app = express();

const hostname = '127.0.0.1';
const port = 3000;

// tell node to use the express app to handle all of our requests
const server = http.createServer(app);

// ===============================================================================
//                                  route handlers
// ===============================================================================
app.get('/', (req, res) => {
  res.send('Home Page');
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
