import Todo from "./Todo";

const TodoList = ({
  handleFilter,
  handleDeleteTask,
  handleIscompletedTask,
}) => {
  return (
    <>
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
        <p>Northing to show. Create a new task</p>
      )}
    </>
  );
};

export default TodoList;
