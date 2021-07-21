const todos = document.getElementById('todos');
const todoForm = document.getElementById('todoForm');

const renderTodos = (todosArray) => {
  const todosHtmlArray = todosArray.map(todo => {
    return `<li class="${ todo.completed ? 'completed' : 'incomplete'}">${todo.text}</li>`
  })
  return todosHtmlArray.join('');
}

// do our fetch
const fetchTodos = () => {
  fetch('/api/v1/todos')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    todos.innerHTML = renderTodos(data);
  })
}

fetchTodos();

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('todo_text');
  fetch('/api/v1/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: input.value
    })
  })
  .then(res => res.json())
  .then(data => {
    if(data.error){
      alert(data.error);
    }
    fetchTodos();
    todoForm.reset();
  })
})
