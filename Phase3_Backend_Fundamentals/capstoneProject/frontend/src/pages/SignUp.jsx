import { useState } from "react"
import axios from "axios"

function SignUp() {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3000/users/register",{
                    username,
                    email,
                    password
                }
            )
            alert(response.data.message);
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit} >

            <label htmlFor="username">Username : </label>
            <input type="text" name="username" value={username} placeholder="Enter your username" onChange={(e)=>setUsername(e.target.value)} />

            <br />

            <label htmlFor="email">Email : </label>
            <input type="text" name="email" value={email} placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} />

            <br />
            
            <label htmlFor="password">Password : </label>
            <input type="password" name="password" value={password} placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />

            <br />
            
            <button type="submit">Sign Up</button>

        </form>
    </div>
  )
}

export default SignUp