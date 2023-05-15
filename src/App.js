import React, { Fragment, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import InputTask from "./components/InputTask";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState("");
  const [filter, setFilter] = useState("all");

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

  // Filter the items based on the state.
  const handleFilter = () => {
    if (filter === "Active") {
      return tasks.filter((task) => task.isCompleted === false);
    } else if (filter === "Completed") {
      return tasks.filter((task) => task.isCompleted === true);
    } else {
      return tasks;
    }
  };

  // ClearAll the completed the tasks
  const clearAllCompletedTasks = () => {
    const activeTasks = tasks.filter((task) => !task.isCompleted);
    setTasks(activeTasks);
  };

  // count the active tasks
  const getActiveTasks = () => {
    return tasks.filter((task) => !task.isCompleted).length;
  };

  return (
    <Fragment>
      <InputTask
        inputTask={inputTask}
        setInputTask={setInputTask}
        handleCreateTask={handleCreateTask}
      />

      <TodoList
        handleFilter={handleFilter}
        handleDeleteTask={handleDeleteTask}
        handleIscompletedTask={handleIscompletedTask}
      />

      <Footer
        getActiveTasks={getActiveTasks}
        setFilter={setFilter}
        clearAllCompletedTasks={clearAllCompletedTasks}
      />
    </Fragment>
  );
};

export default App;
