import Layout from "../../components/layouts/Layout.jsx";
import NotesGrid from "../../components/notes/NotesGrid.jsx";
import useNotes from "../../hooks/useNotes.js";

export default function Dashboard() {
  const {
    notes,
    loading,
  } = useNotes();

  return (
    <Layout>
      <NotesGrid
        notes={notes}
        loading={loading}
      />
    </Layout>
  );
}