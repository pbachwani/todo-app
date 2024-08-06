// eslint-disable-next-line react/prop-types
const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  return (
    <li className="flex gap-2">
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        className={`text-blue-200 flex gap-1 cursor-pointer checked:line-through ${
          completed ? " text-gray-500 line-through" : ""
        }`}
      >
        {title}
      </label>
      <button
        onClick={() => deleteTodo(id)}
        className="bg-red-950 border border-red-600 text-red-500 rounded-md px-3 hover:bg-red-900"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
