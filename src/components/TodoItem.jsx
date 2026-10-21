import { useTodos } from "../hooks/useTodos.jsx";

function TodoItem({ id, title, description, completed }) {
  const { alterCompleted, deleteTask } = useTodos();

  return (
    <li
      className={`bg-gray-700 p-4 rounded-md mb-2 w-full max-w-md ${
        completed ? "opacity-70" : ""
      }`}
    >
      <p className={`text-gray-300 ${completed ? "line-through" : ""}`}>
        {title}
      </p>
      <p className="text-gray-300">{description}</p>
      <button
        type="button"
        className="bg-green-500 text-white px-2 py-1 rounded-md mt-2 hover:bg-green-600"
        onClick={() => alterCompleted(id)}
      >
        {completed ? "Undo" : "Complete"}
      </button>
      <button
        type="button"
        className="bg-red-500 text-white px-2 py-1 rounded-md mt-2 ml-2 hover:bg-red-600"
        onClick={() => deleteTask(id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
