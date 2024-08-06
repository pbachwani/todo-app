/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

export const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div className="flex flex-col overflow-auto">
      <h1 className="py-2 mt-4">To-do List</h1>
      <ul className="m-2 mb-2 flex flex-col gap-1 w-80 overflow-scroll">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
