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

  // Deleting an item in the tasks
  const handleDeleteClick = (deletingTask) => {
    const remainingTasks = tasks.filter(
      (allTasks) => allTasks !== deletingTask
    );
    setTasks(remainingTasks);
  };

  return (
    <Fragment>
      <input
        type="text"
        onChange={(e) => setInputTask(e.target.value)}
        value={inputTask}
      />
      <button onClick={handleCreateClick}>Create</button>
      {tasks.length > 0 ? (
        tasks.map(
          (
            task,
            index //conditional rendering
          ) => (
            <div key={index}>
              <span>{task}</span>
              <button onClick={() => handleDeleteClick(task)}>Delete</button>
            </div>
          )
        )
      ) : (
        <p>Northing to show. Create a new task</p>
      )}
    </Fragment>
  );
};

export default App;
