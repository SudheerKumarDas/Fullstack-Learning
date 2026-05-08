import { useEffect } from "react"
import { useState } from "react";

// export default function UseEffectHook(){
//     const [count, setCount]=useState(0);
//     console.log("component rendered");
//     useEffect(()=>{
//         console.log("useEffect hook ran");
//     })
//     useEffect(()=>{
//         console.log("this useEffect ran only once when mounted first");
//     },[]);
//     useEffect(()=>{
//         console.log("this useEffect ran when its dependency array i.e. count changes !!");
//     },[count]);
//     return (
//         <>
//             <h1>Hello useEffect</h1>
//             <button onClick={()=>setCount(count+1)}>Counter increase button {count}</button>
//         </>
//     )
// }


// export default function UseEffectHook(){
//      const [users,setUsers]=useState([]);

//      useEffect(()=>{
//             fetch('https://jsonplaceholder.typicode.com/users')
//                 .then(res => res.json())
//                     .then(data => setUsers(data));
//      },[])
//     return (
//         <>
//             <h1>List of users</h1>
//             {
//                 users.map(user => {
//                     return <li key={user.id}>{user.name}</li>
//                 })
//             }
//         </>
//     )
// }

// export default function UseEffectHook(){
//     const [users,setUsers]=useState([]);
//     const [userId, setUsersId]=useState(1);
    
//     console.log("components renders");

//     useEffect(()=>{
//             fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//                 .then(res => res.json())
//                     .then(data => setUsers(data))
//     },[userId])
//     return (
//         <div>
//             <h1>User : {userId}</h1>
//             <h2>{users.name}</h2>
//             <button onClick={()=>setUsersId(userId+1)}>Change User</button>
//         </div>
//     )
// }


export default function UseEffectHook(){
    const [count, setCount]=useState(0);
    console.log("renders");
    useEffect(()=>{

        const timer = setInterval(()=>{
            setCount(count+1);
        },1000);
    
        return ()=>{
            clearInterval(timer);
        }
    },[count])
    return ( 
        <div>
           <h1> {count} </h1> 
        </div>
    )
}