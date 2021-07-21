// set up server
const http = require("http");
const express = require("express");
const db = require('./model/db');

const app = express();
const server = http.createServer(app);
// include middleware (static files, json, urlencode)

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// REST 
// representational state transfer
// check out the docs for api versioning and other good practices

//===============================================================
//                          Routes
//===============================================================
// Get all Todos
app.get('/api/v1/todos', (req, res) => {
  res.json(db.todos)
})

app.post('/api/v1/todos', (req, res) => {
  // console.log(req.body);
  if(req.body.text){
    const newTodo = {
      id: db.todos.length++,
      text: req.body.text,
      completed: false
    }
    db.todos.push(newTodo);
    res.status(201).json(newTodo); // something was sucessfully created
  } else {
    res.status(422).json({
      error: "please include todo text"
    })
  }
  // res.send(newTodo)
})

app.patch('/api/v1/todos/:id', (req,res) => {
  // get the id from the route. All params are by default strings
  const id = Number(req.params.id);
  // find the existing todo
  const toDoIndex = db.todos.findIndex(i => i.id === id);
  if(toDoIndex === -1){
    res.status(404).json({ "error": "could not find an item with that id"});
    return;
  }
  let madeChanges = false;
  // update the todo
  if(req.body.text) {
    db.todos[toDoIndex].text = req.body.text;
    madeChanges = true;
  }
  if(req.body.completed) {
    db.todos[toDoIndex].completed = req.body.completed;
    madeChanges = true;
  }
  if(madeChanges) {
    res.status(200).json(db.todos[toDoIndex])
  } else {
    res.status(404).json({ "error": "no changes made. No data provided to make changes"})
  }
})

app.delete('/api/v1/todos/:id', (req,res) => {
  // get the id
  const id = Number(req.params.id);
  // find the existing todo
  // delete the todo
  db.todos = db.todos.filter(eachItem => eachItem.id !== id);
  // respond with 204 and empty response
  // console.log(db.todos);
  res.status(204).json()
  // res.send(db.todos)
})
// Create new Todo

// Update existing todo by id

// delete existing to do by id



// listen for requests
server.listen(3000, "127.0.0.1", () => {
  console.log('Server listening on port on http://127.0.0.1:3000');
})
