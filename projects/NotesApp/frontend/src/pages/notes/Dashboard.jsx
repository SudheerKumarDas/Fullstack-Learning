import Navbar from "../../components/layouts/Navbar.jsx";
import Sidebar from "../../components/layouts/Sidebar.jsx";
import CreateButton from "../../components/notes/CreateButton.jsx";
import NotesGrid from "../../components/notes/NotesGrid.jsx";
import { useAuth } from "../../context/useAuth.js"

export default function Dashboard() {

    const { user } = useAuth();

    console.log(user);

    return (
      <div>
        <Navbar/>
        <div style={{
          display: "flex",
          minHeight: "90vh",
        }}>
          <Sidebar/>
          <NotesGrid/>
        </div>
        <CreateButton/>       
      </div>
    )
}