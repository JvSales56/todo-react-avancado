import { createContext, useState, useMemo } from "react";

export const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (newTask) => {
    setTasks((currentTasks) => [...currentTasks, newTask]);
  };

  const alterCompleted = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filter === "completed") {
        return task.completed;
      }

      if (filter === "incomplete") {
        return !task.completed;
      }

      return true;
    });
  }, [tasks, filter]);

  const value = {
    tasks,
    filter,
    setFilter,
    filteredTasks,
    addTask,
    alterCompleted,
    deleteTask,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
