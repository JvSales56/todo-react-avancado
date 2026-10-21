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
    <form
      className="flex flex-col gap-4 bg-gray-800 p-6 rounded-lg w-full max-w-md shadow-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-semibold text-white">Add New Task</h2>
      <div className="flex flex-col gap-3">
        <input
          className="w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
          type="text"
          placeholder="Task name"
          value={title.value}
          onChange={title.onChange}
          required
        />
        <textarea
          className="w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none h-28 transition-all"
          placeholder="Add a new task description"
          value={description.value}
          onChange={description.onChange}
          required
        />
      </div>
      <button
        className="w-full bg-sky-600 hover:bg-sky-500 text-white font-medium py-2.5 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-800 cursor-pointer"
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
