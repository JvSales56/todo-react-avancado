import { useInput } from "../hooks/useInput.jsx";
import { useTodos } from "../hooks/useTodos.jsx";

function TodoForm() {
  const title = useInput("");
  const description = useInput("");

  const { addTask } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.value.trim() || !description.value.trim()) {
      return;
    }

    addTask({
      id: crypto.randomUUID(),
      title: title.value.trim(),
      description: description.value.trim(),
      completed: false,
    });

    title.clearInput();
    description.clearInput();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task name"
        value={title.value}
        onChange={title.onChange}
        required
      />
      <textarea
        placeholder="Add a new task description"
        value={description.value}
        onChange={description.onChange}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;
