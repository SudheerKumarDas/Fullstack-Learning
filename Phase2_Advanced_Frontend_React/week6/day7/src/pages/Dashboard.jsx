
import { Outlet, Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <h1>Dashboard Page</h1>

        <nav>
            <Link to="profile">profile</Link>
            <br />
            <Link to="settings">settings</Link>
        </nav>

        <hr />

        <Outlet/>
    </div>
  )
}

export default Dashboard