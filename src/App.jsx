import React, { useState } from 'react';
import './index.css';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Einkaufen gehen', completed: true },
    { id: 2, task: 'React-App erstellen', completed: false },
    { id: 3, task: 'Übungen für JavaScript machen', completed: false },
    { id: 4, task: 'Für Scrum Prüfung lernen', completed: true },
    { id: 5, task: 'Urlaub gehabt', completed: true },
  ]);

  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newId = todos.length + 1;
      const newTask = newTodo.trim();
      const newTodoItem = { id: newId, task: newTask, completed: false };

      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleButtonClicked = () => {
    const neueTodos = todos.filter((todo) => !todo.completed);
    setTodos(neueTodos);
  };

  return (
      <div class='container h1'>
        <div className='h1'>
      <h1>Todo-List</h1>
      </div>
      <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => handleToggleTodo(todo.id)}
          >
            {todo.task}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Neues Todo hinzufügen"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      </div>
      <div>
      <button onClick={handleAddTodo}>Todo hinzufügen</button>
      <button onClick={handleButtonClicked} className="button erledigt">
        Erledigte Aufgaben löschen
        </button>
        </div>
    </div>
  );
}

export default TodoList;
