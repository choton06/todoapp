import { useState } from "react";
import TodoList from "./Components/ToDoList";
import Header from "./Components/Header";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(taskText) {
    const newTask = { id: Date.now(), text: taskText, complete: false };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function editTask(taskId, newTaskText) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: newTaskText } : task
      )
    );
  }

  function toggleComplete(taskId) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, complete: !task.complete } : task
      )
    );
  }

  return (
    <>
      <Header />
      <TodoList
        tasks={tasks}
        addTask={addTask}
        deleteTask={deleteTask}
        editTask={editTask}
        toggleComplete={toggleComplete}
      />
    </>
  );
}

export default App;


