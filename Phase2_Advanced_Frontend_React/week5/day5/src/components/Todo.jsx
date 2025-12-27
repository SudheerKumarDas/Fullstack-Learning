import { useEffect, useState } from "react"

function Todo(){
    const [todo, setTodo]=useState("todo1");

    useEffect(()=>{
        fetch('hhtps:www.example.com/todo/');
    })
    return (
        <div>
            <button onClick={()=>setTodo("todo1")} style={{color: todo == "todo1" ? "red" : "black"}}>Todo1</button>
            <button onClick={()=>setTodo("todo2")} style={{color: todo == "todo2" ? "red" : "black"}}>Todo2</button>
            <button onClick={()=>setTodo("todo3")} style={{color: todo == "todo3" ? "red" : "black"}}>Todo3</button>
            <button onClick={()=>setTodo("todo4")} style={{color: todo == "todo4" ? "red" : "black"}}>Todo4</button>
        </div>
    )
}

export default Todo;