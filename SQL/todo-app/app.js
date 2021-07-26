// require modules
const http = require("http");
const express = require("express");
// const db = require('./model/db')
const pgp = require("pg-promise")();
const config = require('./config');
const db = pgp(config);

// set up server
const app = express();
const server = http.createServer(app)

let id = 6;

// include middleware (static files, json, urlencode)
app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// Get all Todos
app.get('/api/v1/todos', (req, res) => {
  db.many("SELECT * FROM todos")
    .then((todos) => {
      console.log(todos)
      res.json(todos);
    })
})

// Create new Todo
app.post('/api/v1/todos', (req, res) => {
  if (!req.body || !req.body.text) {
    // respond with an error
    res.status(422).json({
      error: "must include todo text"
    })
    return
  }
  const newTodo = {
    // id: id++,
    text: req.body.text
    // completed: false
  }
  // db.todos.push(newTodo)
  db.result("INSERT INTO todos (text) VALUES (${text}) RETURNING *", newTodo)
    .then((results) => {
      const createdTodo = results.rows[0];
      res.status(201).json(createdTodo)
    })

})

// Update existing todo by id
app.patch('/api/v1/todos/:id', (req, res) => {
  // get the id from the route
  const id = parseInt(req.params.id);
  // find the existing todo
  const todoIndex = db.todos.findIndex((todo) => {
    return todo.id === id
  })
  // if we could not find the todo with that id
  if (todoIndex === -1) {
    res.status(404).json({ error: 'could not find todo with that id '})
    return
  }
  // update the todo text if one was provided
  if (req.body && req.body.text) {
    db.todos[todoIndex].text = req.body.text
  }
  // update the todo completed status if it was provided
  if (req.body && req.body.completed !== undefined) {
    db.todos[todoIndex].completed = req.body.completed
  }
  // respond with updated item
  res.json(db.todos[todoIndex])
})

// delete existing todo by id
app.delete('/api/v1/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);

  db.result("DELETE FROM todos WHERE id = $1", id)
    .then((results) => {
      if(results.rowCount === 0) {
        res.status(404).json({ error: 'could not find todo with that id '})
      } else {
        // respond with 204 and a blank response
        res.status(204).json();
      }
    })
})
  // // get the id
  // const id = parseInt(req.params.id)
  // // find the existing todo
  // const todoIndex = db.todos.findIndex((todo) => {
  //   return todo.id === id
  // })
  // // if we could not find the todo with that id
  // if (todoIndex === -1) {
  //   res.status(404).json({ error: 'could not find todo with that id '})
  //   return
  // }
  // // delete the todo
  // db.todos.splice(todoIndex, 1)
  // // respond with 204 and empty response
  // res.status(204).json()


// listen for requests
server.listen(3000, '127.0.0.1', () => {
  console.log('Server Listening on http://127.0.0.1:3000')
})