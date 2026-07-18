import { useAuth } from "../../context/useAuth.js";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <header className="flex items-center justify-between border-b bg-white px-8 py-4 shadow-sm">
      <h1 className="text-2xl font-bold text-blue-600">Notes App</h1>

      <div className="flex items-center gap-5">
        <span className="font-medium">{user?.username}</span>

        <button
          onClick={logout}
          className="rounded-md bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
