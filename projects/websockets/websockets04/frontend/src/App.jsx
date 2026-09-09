import { useEffect, useState, useRef } from "react"
import './App.css'

function App() {
  const [messages,setMessages]=useState([]);
  const socketRef = useRef();
  const inputRef = useRef();

  const sendMessage = (e) => {
    e.preventDefault();
    const message = inputRef.current?.value;
    socketRef.current?.send(JSON.stringify({
      "type":"chat",
      "payload":{
        "message":message
      }
    }))
  }

  useEffect(()=>{
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      socket.send(JSON.stringify({
        "type":"join",
        "payload":{
          "room":"red"
        }
      }))
    }

    socket.onmessage=(event)=>{
      setMessages(m=>[...m,event.data])
    }
    socketRef.current=socket;
  },[])
  return (
    <div className="bg-gray-700 h-screen">
      <br /><br />
      <div className="h-[80vh]">
        {messages.map(message => <div className="m-8">
          <span className="bg-white text-black rounded p-4">{message}</span>
        </div>)}
      </div>
      <div className="p-4 m-2 text-2xl">
        <input 
          ref={inputRef}
          type="text" 
          placeholder="Enter your message"
          className="p-2 m-1 border-2" 
        />

        <button 
          onClick={sendMessage}
          className="cursor-pointer p-2 m-1 border-2"
        >Send</button>
      </div>
    </div>
  )
}

export default App
