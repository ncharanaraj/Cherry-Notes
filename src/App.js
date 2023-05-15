import React, { Fragment, useState } from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    "Learn React",
    "Learn Javascript",
    "Learn CSS",
    "Learn HTML",
  ]);

  const [inputTask, setInputTask] = useState("");

  const handleCreateClick = () => {
    setTasks([inputTask, ...tasks]); //re-arranging
    setInputTask(""); //resetting the input
  };

  return (
    <Fragment>
      <input
        type="text"
        onChange={(e) => setInputTask(e.target.value)}
        value={inputTask}
      />
      <button onClick={handleCreateClick}>Create</button>
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </Fragment>
  );
};

export default App;
