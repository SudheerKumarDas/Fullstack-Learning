import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8080});

let socketCount = 1;

wss.on("connection",(socket)=>{
    console.log(`Client ${socketCount} connected successfully`);
    socketCount=socketCount+1;
    socket.on("message",(message)=>{
        console.log("client :",message.toString());
        setTimeout(()=>{
            socket.send(`Server: You said ${message.toString()}`);
        },2000);
    })
})