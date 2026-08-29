const WebSocket = require("ws");

const PORT = 8080;

const wss = new WebSocket.Server({ port : PORT });

console.log(`websocket server is running on ws://localhost:${PORT}`);

wss.on('connection', (socket)=> {
    console.log(`Client connected`)

    //send message to the client
    socket.send(
        JSON.stringify({
            type:"welcome",
            message:"welcome to the websocket server"
        })
    );

    //receive the message by client
    socket.on("message",(data)=>{
        const message = data.toString();
        console.log(`received:${message}`);

        socket.send(
            JSON.stringify({
                type:"echo",
                message:message
            })
        )
    })

    socket.on("close",()=>{
        console.log(`Client disconnected`)
    });

    socket.on("error",(error)=>{
        console.error("WebSocket error : ",error)
    })
});
