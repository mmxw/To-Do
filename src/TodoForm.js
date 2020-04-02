import React, {useState} from 'react'


function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      /> 
      <button type="submit" onClick={handleSubmit}>add new todo</button>
    </form>
  );
}

export default TodoForm; 