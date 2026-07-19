import { useState } from "react";

export default function AddNoteModal({onClose,onAddNote}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title.trim() || !content.trim()){
        alert("Provide all the fields");
    }
    const newNote = {
        id:Date.now(),
        title:title,
        content:content,
        createdAt:"Today"
    }
    onAddNote(newNote);
    setTitle("");
    setContent("");
  }

  return (
    <div className="w-full h-screen fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 w-96 ">
            <h2 className="text-xl font-semibold mb-4">Add a Note</h2>
        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title"
            className="border border-gray-500 rounded-xl p-2"
          />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="content">Content : </label>
          <textarea
            type=""
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter the Content"
            className="border border-gray-500 rounded-xl p-2"
          />
        </div>
        <div className="flex gap-4">
          <button 
            type="button"
            onClick={onClose}
            className="border border-gray-500 p-2 cursor-pointer rounded-xl"  >
                Cancel
          </button>
          <button 
            type="submit"
            className="border-none bg-blue-500 p-2 cursor-pointer rounded-xl hover:bg-blue-700">
                Create
          </button>
        </div>
      </form>
    </div>
  );
}
