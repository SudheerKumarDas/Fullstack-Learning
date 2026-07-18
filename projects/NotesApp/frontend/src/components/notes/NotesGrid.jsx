import EmptyState from "./EmptyState.jsx";

const NotesGrid = () => {
  const notes = [];

  if (notes.length === 0) {
    return <EmptyState />;
  }
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {/* Note cards will go here */}
    </div>
  );
};

export default NotesGrid;
