import "./footer.css";

const Footer = ({ getActiveTasks, setFilter, clearAllCompletedTasks }) => {
  return (
    <>
      <div className="footer-text">{getActiveTasks()} Active Tasks</div>
      <div className="footer-btns">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Active")}>Active</button>
        <button onClick={() => setFilter("Completed")}>Completed</button>
        <button onClick={clearAllCompletedTasks}>Clear All</button>
      </div>
    </>
  );
};

export default Footer;
