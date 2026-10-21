import { useTodos } from "../hooks/useTodos.jsx";
import TodoItem from "./TodoItem.jsx";

function TodoList() {
  const { filteredTasks } = useTodos();

  if (filteredTasks.length === 0) {
    return <p className="text-gray-300">No tasks to display.</p>;
  }

  return (
    <ul className="w-full max-w-md">
      {filteredTasks.map((task) => (
        <TodoItem key={task.id} {...task} />
      ))}
    </ul>
  );
}

export default TodoList;
