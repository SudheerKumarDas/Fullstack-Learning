import { useAuth } from "../../context/useAuth.js";

const Navbar = () => {
    const {user} = useAuth();
  return (
    <div style={{
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        borderBottom: "1px solid #ddd",
    }}>
        <h2>NotesApp</h2>
        {user?.username}
    </div>
  )
}

export default Navbar