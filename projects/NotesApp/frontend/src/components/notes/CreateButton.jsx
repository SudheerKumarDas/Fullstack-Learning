import { FaPlus } from "react-icons/fa";

export default function CreateButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl text-white shadow-lg transition hover:bg-blue-700"
    >
      <FaPlus />
    </button>
  );
}
