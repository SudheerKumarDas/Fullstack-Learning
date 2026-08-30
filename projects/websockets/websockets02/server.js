const WebSocket = require("ws");

const wss = new WebSocket.Server({ port:8080 });

wss.on("connection",(ws)=>{
    console.log("A new client connected!");

    ws.on("message",(message)=>{
        console.log("Client : ",message.toString());
        ws.send("Server : Hello client, How are you ?");
    })

    ws.send("Hello From Server");

    // ws.close("close",()=>{
    //     console.log("Client disconnected...")
    // })
})

console.log("WebSocket server running on ws://localhost:8080");