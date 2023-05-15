const Footer = ({ getActiveTasks, setFilter, clearAllCompletedTasks }) => {
  return (
    <>
      <span>{getActiveTasks()} remaining active tasks</span>
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Active")}>Active</button>
      <button onClick={() => setFilter("Completed")}>Completed</button>
      <button onClick={clearAllCompletedTasks}>Clear All</button>
    </>
  );
};

export default Footer;
