import { useState } from "react";
import { userInput } from "../hooks/userInput";

function TodoForm({ addTask }) {
  const name = userInput("");
  const description = userInput("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.value.trim() || !description.value.trim()) {
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      name: name.value,
      description: description.value,
      completed: false,
    };

    addTask(newTask);

    name.clearInput();
    description.clearInput();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task name"
        value={name.value}
        onChange={name.onChange}
      />
      <input
        type="text"
        placeholder="Add a new task description"
        value={description.value}
        onChange={description.onChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;
