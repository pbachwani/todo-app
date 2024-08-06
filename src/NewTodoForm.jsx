import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const NewTodoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <label htmlFor="item">Add New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
          className="outline-none border bg-blue-300 rounded-md h-8 text-white border-blue-700 py-2 px-2 w-96"
        />
      </div>
      <button className="bg-slate-600 border-blue-600 px-1 rounded-md cursor-pointer border-2 hover:bg-blue-400 focus-within:bg-blue-800">
        Add
      </button>
    </form>
  );
};

export default NewTodoForm;
