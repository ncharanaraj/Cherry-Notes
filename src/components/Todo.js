const Todo = ({ task, handleIscompletedTask, handleDeleteTask }) => {
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => handleIscompletedTask(task.id)}
        checked={task.isCompleted}
      />
      <span>{task.input}</span>
      <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Todo;
