import EmptyState from "./EmptyState.jsx";
import NoteCard from "./NoteCard.jsx";

export default function NotesGrid({ notes, loading }) {
  if (loading) {
    return <h2 className="text-xl">Loading...</h2>;
  }

  if (notes.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {notes.map((note) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </div>
  );
}
