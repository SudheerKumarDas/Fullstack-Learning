import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socket,setSocket] = useState();
  const inputRef = useRef();

  const sendMessage = () => {
    if(!socket){
      return 
    }
    const message = inputRef.current.value;
    socket.send(message);
  }
  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (ev) =>{
      alert(ev.data);
    }
  },[]);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder='message ...' />
      <button onClick={sendMessage}>send</button>
    </div>
  )
}

export default App
