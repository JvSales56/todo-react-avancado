import { useTodos } from "../hooks/useTodos.jsx";

function TodoItem({ id, title, description, completed }) {
  const { alterCompleted, deleteTask } = useTodos();

  return (
    <li
      className={`bg-gray-800 p-4 rounded-lg w-full max-w-md flex items-center justify-between gap-4 border border-gray-700/50 shadow-sm transition-all ${
        completed ? "opacity-60 bg-gray-800/60" : ""
      }`}
    >
      <div className="flex flex-col gap-2 min-w-0 flex-1">
        <h3
          className={`font-medium text-base truncate ${
            completed ? "line-through text-gray-700" : "text-white"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm wrap-break-word ${
            completed ? "line-through text-gray-700" : "text-gray-400"
          }`}
        >
          {description}
        </p>
      </div>

      <div className="flex flex-col items-center gap-2 shrink-0">
        <button
          type="button"
          className={`px-3 py-4 text-xs font-medium text-white rounded-md transition-colors cursor-pointer ${
            completed
              ? "bg-amber-600 hover:bg-amber-500 px-6"
              : "bg-emerald-600 hover:bg-emerald-500"
          }`}
          onClick={() => alterCompleted(id)}
        >
          {completed ? "Undo" : "Complete"}
        </button>

        <button
          type="button"
          className="px-5 py-3 text-xs font-medium text-white bg-rose-600 hover:bg-rose-500 rounded-md transition-colors cursor-pointer"
          onClick={() => deleteTask(id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
