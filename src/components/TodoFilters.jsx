import { useTodos } from "../hooks/useTodos.jsx";

function TodoFilters() {
  const { filter, setFilter } = useTodos();

  return (
    <div>
      <button
        type="button"
        onClick={() => setFilter("all")}
        disabled={filter === "all"}
      >
        All
      </button>

      <button
        type="button"
        onClick={() => setFilter("completed")}
        disabled={filter === "completed"}
      >
        Completed
      </button>

      <button
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
