import { FaStickyNote, FaThumbtack, FaArchive, FaTrash } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="min-h-[calc(100vh-73px)] w-64 border-r bg-white p-5">
      <nav className="space-y-4">
        <button className="flex w-full items-center gap-3 rounded-lg p-3 transition hover:bg-gray-100">
          <FaStickyNote />
          <span>All Notes</span>
        </button>

        <button className="flex w-full items-center gap-3 rounded-lg p-3 transition hover:bg-gray-100">
          <FaThumbtack />
          <span>Pinned</span>
        </button>

        <button className="flex w-full items-center gap-3 rounded-lg p-3 transition hover:bg-gray-100">
          <FaArchive />
          <span>Archived</span>
        </button>

        <button className="flex w-full items-center gap-3 rounded-lg p-3 transition hover:bg-gray-100">
          <FaTrash />
          <span>Trash</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
