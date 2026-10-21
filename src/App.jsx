import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import TodoFilters from "./components/TodoFilters.jsx";

function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-indigo-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 ">To Do List App</h1>

      <TodoForm />
      <TodoFilters />
      <TodoList />
    </main>
  );
}

export default App;
