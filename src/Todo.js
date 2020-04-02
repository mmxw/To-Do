import React from 'react';

const Todo = ({ todo, index, removeTodo }) => {
  return (
    <div 
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}
      >
      { todo.text }
      <button onClick={() => removeTodo(index)}>X</button>

    </div>
  );
}

export default Todo 