import { FaRegStickyNote } from "react-icons/fa";
const EmptyState = () => {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center text-gray-500">
      <FaRegStickyNote className="mb-5 text-7xl" />

      <h2 className="text-3xl font-semibold">No Notes Yet</h2>

      <p className="mt-2">Create your first note to get started.</p>
    </div>
  );
};

export default EmptyState;
