const WebSocket = require("ws");

const wss = new WebSocket.Server({ port:8080 });

wss.on("connection",(ws)=>{
    console.log("A new client connected : ", Math.floor(Math.random()*100)+1);

    //only to the one client and server
    // ws.on("message",(message)=>{
    //     console.log("Client : ",message.toString());
    //     ws.send("Server : Hello client, How are you ?");
    // })

    //ws.send("Hello From Server");

    //broadcast to all the clients that are connected to websocket server including the one that sends
    ws.on("message",(data)=>{
        wss.clients.forEach((client)=>{
            if(client.readyState===client.OPEN){
                client.send(data.toString());
            }
        })
    })

    // ws.close("close",()=>{
    //     console.log("Client disconnected...")
    // })
})

console.log("WebSocket server running on ws://localhost:8080");