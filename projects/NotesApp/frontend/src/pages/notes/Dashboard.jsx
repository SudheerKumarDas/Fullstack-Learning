import { useState } from "react";

import Layout from "../../components/layouts/Layout.jsx"
import NotesGrid from "../../components/notes/NotesGrid.jsx";
import CreateButton from "../../components/notes/CreateButton.jsx";
import NoteModal from "../../components/notes/NoteModal.jsx";

import useNotes from "../../hooks/useNotes.js";

export default function Dashboard() {
  const { notes, loading, createNote, updateNote, deleteNote } = useNotes();

  // Controls opening and closing the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Stores the selected note for editing
  const [selectedNote, setSelectedNote] = useState(null);

  // Open Create Modal
  const handleCreate = () => {
    setSelectedNote(null);
    setIsModalOpen(true);
  };

  // Open Edit Modal
  const handleEdit = (note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  // Close Modal
  const handleClose = () => {
    setSelectedNote(null);
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <NotesGrid notes={notes} loading={loading} onEdit={handleEdit} onDelete={deleteNote} />

      <CreateButton onClick={handleCreate} />

      <NoteModal
        isOpen={isModalOpen}
        onClose={handleClose}
        note={selectedNote}
        createNote={createNote}
        updateNote={updateNote}
      />
    </Layout>
  );
}
