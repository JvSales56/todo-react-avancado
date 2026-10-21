function Login() {
  const userInput = userInput();
  const { setUser } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();

    setUser({ name: userInput.value, signedIn: true });
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        className="bg-gray-700 p-4 rounded-md mb-2 w-full max-w-md"
        type="text"
        placeholder="Username"
        value={userInput.value}
        onChange={userInput.onChange}
      />
      <button type="submit" className="bg-blue-500 text-white p-4 rounded-md">
        Login
      </button>
    </form>
  );
}

export default Login;
