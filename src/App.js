import React, { Fragment, useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    "Learn React",
    "Learn Javascript",
    "Learn CSS",
    "Learn HTML",
  ]);

  const [inputTodo, setInputTodo] = useState("");

  const handleAddTask = () => {
    setTodos([inputTodo, ...todos]); //re-arranging
    setInputTodo(""); //resetting the input
  };

  return (
    <Fragment>
      <input
        type="text"
        onChange={(e) => setInputTodo(e.target.value)}
        value={inputTodo}
      />
      <button onClick={handleAddTask}>Add</button>
      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </Fragment>
  );
};

export default App;
