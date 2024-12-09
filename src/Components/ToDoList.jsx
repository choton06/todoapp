import { useState } from "react";
import TodoItem from "./TodoItem";

function ToDoList({ tasks, addTask, editTask, deleteTask, toggleComplete }) {
  const [newTaskText, setNewTaskText] = useState("");

  function HandleAddTask() {
    if (newTaskText.trim()) {
      addTask(newTaskText.trim());
      setNewTaskText("");
    }
  }

  const hasTasks = tasks && tasks.length > 0;

  return (
    <div className="bg-slate-600 h-screen">
      <div className="flex items-center justify-center">
        <input
          type="text"
          value={newTaskText}
          placeholder="Add a task"
          className="border-black w-80 rounded-md p-2 m-6"
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button
          onClick={HandleAddTask}
          className="p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-white border-yellow-50 text-blue-700 rounded-lg hover:text-white"
        >
          Add
        </button>
      </div>

      {hasTasks ? (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))
      ) : (
        <div className="flex items-center justify-center">No tasks</div>
      )}
    </div>
  );
}

export default ToDoList;






