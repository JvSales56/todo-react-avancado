import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [task, setTask] = useState([]);

  const addTask = (newTask) => {
    setTask((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-500">
      <h1 className="text-shadow-white text-4xl">To Do List App</h1>
      <TodoForm addTask={addTask} />
      <ul>
        {task.map((task) => (
          <TodoItem
            key={task.id}
            name={task.name}
            description={task.description}
          />
        ))}
      </ul>
    </main>
  );
}

export default App;
