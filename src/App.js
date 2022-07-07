import React, {useEffect, useState} from 'react';
import './styles/Todo.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [current, setCurrent] = useState('');
  const [query, setQuery] = useState('');

  // ============== Lifecycle Effects ==============

  useEffect(() => {
    localStorage.getItem('todos') && setTodos(
      JSON.parse(localStorage.getItem('todos'))
    );
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // ============== Event Handlers ==============

  const handleItemClick = e => {
    e.target.classList.toggle('completed'); // line-through
    
    let newTodo = todos.slice();
    for (let item of newTodo) {
      if (item.id === +e.target.dataset.id) { // + used to convert from str to int
        item.completed = !item.completed;
        setTodos(newTodo);
      }
    }
  };

  const handleInputChange = e => {
    setCurrent(e.target.value);
  };

  const handleSearchChange = e => {
    setQuery(e.target.value);
  };

  const addTodo = e => {
    e.preventDefault(); // stop submit/reload
    setTodos(todos.concat([{ // add current todo (from input) to todos
        task: current,
        id: Date.now(),
        completed: false
      }])
    );
    if (current.length > 30) alert('Your task is too long!');
  };

  const clearTodo = e => {
    e.preventDefault();
    setTodos(todos.filter(item => !item.completed)); // array of incomplete todos
  };

  const clearAll = e => {
    e.preventDefault();
    setTodos([]);
  };

  let filteredTodos = todos.filter(
    todo => {
      if (todo.task === '') return null;
      if (todo.task.length > 30) return null;
      return todo.task.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    }
  );
  
  return (
    <div className="container">
      <TodoList 
        todos={filteredTodos} 
        onItemClick={handleItemClick}
      />
      <TodoForm 
        onInputChange={handleInputChange} 
        onSubmit={addTodo} 
        onClear={clearTodo} 
        onClearAll={clearAll}
        onSearch={handleSearchChange}
      />
    </div>
  );
}

export default App;