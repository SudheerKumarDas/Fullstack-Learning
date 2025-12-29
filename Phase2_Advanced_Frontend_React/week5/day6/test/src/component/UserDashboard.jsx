import React, { useEffect } from 'react';
import { useState } from 'react';

function UserDashboard() {
    const [users, setUsers]=useState([]);
    const [filtered, setFiltered] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading]=useState(false);

    useEffect(()=>{
        let isMounted = true;
        setLoading(true);

            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(data => {
                if (isMounted){
                    setUsers(data);
                    setFiltered(data);
                    setLoading(false);
                }
            })
            .catch(()=>{
                if (isMounted) setLoading(false);
            });
        return ()=> {
            isMounted = false;
        }
    },[]);

    useEffect(()=>{
            const result = users.filter(user => 
                user.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFiltered(result);
    },[searchTerm, users]);

  return (
    <div>
        <h2>User Dashboard</h2>

        <input 
        type="text"
        value={searchTerm}
        placeholder='Search User'
        onChange={(e)=> setSearchTerm(e.target.value)} 
        />

        {loading && <p>loading ...</p>}

        <ul>
            {filtered.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default UserDashboard