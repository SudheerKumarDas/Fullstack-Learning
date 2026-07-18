import { FaThumbtack, FaArchive } from "react-icons/fa";

export default function NoteCard({ note }) {
  return (
    <div className="rounded-xl bg-white p-5 shadow transition hover:shadow-lg">
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
    </div>
  );
}
