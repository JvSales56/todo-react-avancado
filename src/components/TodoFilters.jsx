import { useTodos } from "../hooks/useTodos.jsx";

function TodoFilters() {
  const { filter, setFilter } = useTodos();

  return (
    <div className="flex gap-x-2">
      <button
        className="px-4 py-2 bg-sky-600 text-white rounded border-2 border-transparent disabled:border-sky-400 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
        type="button"
        onClick={() => setFilter("all")}
        disabled={filter === "all"}
      >
        All
      </button>

      <button
        className="px-4 py-2 bg-green-600 text-white rounded border-2 border-transparent disabled:border-sky-400 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
        type="button"
        onClick={() => setFilter("completed")}
        disabled={filter === "completed"}
      >
        Completed
      </button>

      <button
        className="px-4 py-2 bg-yellow-500 text-white rounded border-2 border-transparent disabled:border-sky-400 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
        type="button"
        onClick={() => setFilter("incomplete")}
        disabled={filter === "incomplete"}
      >
        Pending
      </button>
    </div>
  );
}

export default TodoFilters;
