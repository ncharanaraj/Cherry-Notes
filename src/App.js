import React, { Fragment, useState } from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState("");

  const handleCreateTask = () => {
    setTasks([
      {
        id: Date.now().toString(), //rendering in object
        input: inputTask,
        isCompleted: false,
      },
      ...tasks,
    ]); //re-arranging
    setInputTask(""); //resetting the input
  };

  // Deleting an item in the tasks
  const handleDeleteTask = (deletingTaskID) => {
    const remainingTasks = tasks.filter(
      (allTasks) => allTasks.id !== deletingTaskID
    );
    setTasks(remainingTasks);
  };

  // Marking the task as complete
  const handleIscompletedTask = (completedTaskID) => {
    const pendingTasks = tasks.map((task) => {
      if (task.id === completedTaskID) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(pendingTasks);
    console.log(JSON.stringify(pendingTasks));
  };

  return (
    <Fragment>
      <input
        type="text"
        onChange={(e) => setInputTask(e.target.value)}
        value={inputTask}
      />
      <button onClick={handleCreateTask}>Create</button>
      {tasks.length > 0 ? (
        tasks.map(
          (
            task,
            index //conditional rendering
          ) => (
            <div key={index}>
              <input
                type="checkbox"
                onChange={() => handleIscompletedTask(task.id)}
                value={task.isCompleted}
              />
              <span>{task.input}</span>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
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
