import { useEffect, useState } from "react"

function Todo(){
    const [todo, setTodo]=useState(1);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/'+todo)
            .then(async res => {
                const json = await res.json();
                setData(json);
                setLoading(false);
            })
    },[todo]);
    return (
        <div>
            <button onClick={()=>setTodo(1)} style={{color: todo == 1 ? "red" : "black"}}>Todo1</button>
            <button onClick={()=>setTodo(2)} style={{color: todo == 2 ? "red" : "black"}}>Todo2</button>
            <button onClick={()=>setTodo(3)} style={{color: todo == 3 ? "red" : "black"}}>Todo3</button>
            <button onClick={()=>setTodo(4)} style={{color: todo == 4 ? "red" : "black"}}>Todo4</button>
            <br />
            {loading ? "Loading..." : data.title}
        </div>
    )
}

export default Todo;