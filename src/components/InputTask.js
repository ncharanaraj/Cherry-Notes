const InputTask = ({ setInputTask, handleCreateTask, inputTask }) => {
  return (
    <>
      <input
        type="text"
        onChange={(e) => setInputTask(e.target.value)}
        value={inputTask}
      />
      <button onClick={handleCreateTask}>Create</button>
    </>
  );
};

export default InputTask;
