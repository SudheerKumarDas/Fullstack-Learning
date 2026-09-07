import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8080});

wss.on("connection",(socket)=>{
    console.log("client connected");
    setInterval(()=>{
        socket.send("Hello");
    },1000) 
    socket.on("message",(message)=>{
        console.log(message.toString());
    })  
})