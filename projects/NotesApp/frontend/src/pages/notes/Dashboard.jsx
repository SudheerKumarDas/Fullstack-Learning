import { useAuth } from "../../context/useAuth.js"

export default function Dashboard() {

    const { user } = useAuth();

    console.log(user);

    return (
      <div>
        <h1>Dashboard</h1>
        <p>{user.username}</p>
        <p>{user.email}</p>
      </div>
    )
}