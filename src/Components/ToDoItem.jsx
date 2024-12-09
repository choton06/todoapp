import { useState } from "react";

function TodoItem({ task, editTask, deleteTask, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  function handleEditChange(event) {
    setEditedText(event.target.value);
  }

  function handleEditSubmit() {
    if (editedText.trim()) {
      editTask(task.id, editedText.trim());
      setIsEditing(false); // Exit editing mode
    }
  }

  return (
    <div className="flex flex-row justify-center items-center m-6">
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={handleEditChange}
          className="w-3/4 p-2 border-blue-500 border-2 rounded-md"
        />
      ) : (
        <input
          type="text"
          value={task.text}
          readOnly
          className={`w-3/4 p-2 ${
            task.complete ? "line-through text-gray-400" : ""
          }`}
        />
      )}

      {isEditing ? (
        <button
          onClick={handleEditSubmit}
          className="bg-blue-500 rounded-md border-blue-200 shadow-md shadow-blue-400 p-2 m-2 text-yellow-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 duration-300"
        >
          Save
        </button>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="bg-green-500 rounded-md border-blue-200 shadow-md shadow-green-400 p-2 m-2 text-yellow-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-300 duration-300"
        >
          Edit
        </button>
      )}

      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-300 rounded-md border-blue-200 shadow-md shadow-green-400 p-2 m-2 text-yellow-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300"
      >
        Delete
      </button>

      <input
        type="checkbox"
        checked={task.complete}
        onChange={() => toggleComplete(task.id)}
        className=" w-20 h-10 m-2"
      />
    </div>
  );
}

export default TodoItem;


  