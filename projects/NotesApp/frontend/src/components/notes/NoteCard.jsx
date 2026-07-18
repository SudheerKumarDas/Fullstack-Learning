import { FaTrash, FaEdit, FaArchive, FaThumbtack } from "react-icons/fa";

export default function NoteCard({ note, onEdit, onDelete }) {
  return (
    <div
      onClick={() => onEdit(note)}
      className="cursor-pointer rounded-xl bg-white p-5 shadow transition hover:shadow-lg"
    >
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-bold">{note.title}</h2>

        <div className="flex gap-3">
          {note.isPinned && <FaThumbtack className="text-blue-500" />}

          {note.isArchived && <FaArchive className="text-yellow-500" />}
        </div>
      </div>

      <p className="line-clamp-4 text-gray-600">{note.content}</p>

      <div className="mt-5 border-t pt-3 text-sm text-gray-400">
        {new Date(note.createdAt).toLocaleDateString()}
      </div>
      <div className="mt-5 flex justify-end gap-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit(note);
          }}
        >
          <FaEdit />
        </button>

        <button
          onClick={async (e) => {
            e.stopPropagation();

            const confirmDelete = window.confirm("Delete this note?");

            if (!confirmDelete) return;

            const result = await onDelete(note._id);

            if (!result.success) {
              alert(result.message);
            }
          }}
        >
          <FaTrash className="text-red-500" />
        </button>
      </div>
    </div>
  );
}
