import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8080});

wss.on("connection",(socket)=>{
    console.log("client connected");
    // setInterval(()=>{
    //     socket.send("Hello");
    // },1000) 
    // socket.on("message",(message)=>{
    //     console.log(message.toString());
    // })  

    //client send msg ping then server responds with pong 
    socket.on("message",(message)=>{
        if(message.toString()==="ping"){
            socket.send("pong");
        }
    })
})