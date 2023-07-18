import Todo from "./Todo";
import "./todolist.css";

const TodoList = ({
  handleFilter,
  handleDeleteTask,
  handleIscompletedTask,
}) => {
  return (
    <div className="todo-list">
      {handleFilter().length > 0 ? (
        handleFilter().map(
          (
            task //conditional rendering
          ) => (
            <Todo
              key={task.id}
              task={task}
              handleIscompletedTask={handleIscompletedTask}
              handleDeleteTask={handleDeleteTask}
            />
          )
        )
      ) : (
        <p>Northing to show.</p>
      )}
    </div>
  );
};

export default TodoList;
