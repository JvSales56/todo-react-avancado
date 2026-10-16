function TodoItem({ name, description }) {
  return (
    <li className="bg-gray-700 p-4 rounded-md mb-2 w-full max-w-md">
      <p className="text-gray-300">{name}</p>
      <p className="text-gray-300">{description}</p>
      <button className="bg-green-500 text-white px-2 py-1 rounded-md mt-2 hover:bg-green-600">
        Complete
      </button>
      <button className="bg-yellow-500 text-white px-2 py-1 rounded-md mt-2 hover:bg-yellow-600">
        Edit
      </button>
      <button className="bg-red-500 text-white px-2 py-1 rounded-md mt-2 hover:bg-red-600">
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
