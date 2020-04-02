import React, { useState } from 'react';


import './App.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

function App() {
  const [todos, setToDos] = useState([
    { 
      text: "write cover letter for privitar",
      isCompleted: false 
    },
    { 
      text: "submit application to privitar", 
      isCompleted: false 
    },
    { 
      text: "write debugger readme", 
      isCompleted: false 
    }
  ]);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setToDos(newTodos);
  };
  const completeTodo = index => {
    const currentTodos = [...todos];
    currentTodos[index].isCompleted = true;
    setToDos(currentTodos);
  };
  const removeTodo = index => {
    const currentTodos = [...todos];
    currentTodos.splice(index, 1);
    setToDos(currentTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} /> 
      </div>

    </div>

  );

  
}

export default App;
