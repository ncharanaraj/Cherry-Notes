import "./todo.css";

const Todo = ({ task, handleIscompletedTask, handleDeleteTask }) => {
  return (
    <div className="todo-list-items">
      <label>
        <input
          type="checkbox"
          onChange={() => handleIscompletedTask(task.id)}
          checked={task.isCompleted}
        />
        {task.input}
      </label>
      <button
        className="todo-list-btn"
        onClick={() => handleDeleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
