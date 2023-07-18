import "./inputtask.css";

const InputTask = ({ setInputTask, handleCreateTask, inputTask }) => {
  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Add Task"
        onChange={(e) => setInputTask(e.target.value)}
        value={inputTask}
      />
      <button onClick={handleCreateTask}>Add</button>
    </div>
  );
};

export default InputTask;
