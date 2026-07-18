import { useState } from "react";
import Modal from "../common/Modal.jsx";

export default function CreateNoteModal({
  isOpen,

  onClose,

  createNote,
}) {
  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Please fill all fields");

      return;
    }

    try {
      setLoading(true);

      const result = await createNote({
        title,

        content,
      });

      if (result.success) {
        setTitle("");

        setContent("");

        onClose();
      } else {
        alert(result.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="mb-6 text-2xl font-bold">Create Note</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
        />

        <textarea
          placeholder="Write your note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={8}
          className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
        />

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-gray-300 px-5 py-2"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
            {loading ? "Creating..." : "Create Note"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
