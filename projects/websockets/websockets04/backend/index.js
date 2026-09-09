import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8080});

let socketCount = 1;

//make an array of sockets
let allSockets = [];



wss.on("connection",(socket)=>{
    // console.log(`Client ${socketCount} connected successfully`);
    // socketCount=socketCount+1;
    // allSockets.push(socket);
    // socket.on("message",(message)=>{
    //     console.log("client :",message.toString());
    //     // setTimeout(()=>{
    //     //     socket.send(`Server: You said ${message.toString()}`);
    //     // },2000);
    //     allSockets.forEach(s=>{
    //         s.send(`${message.toString()} : sent from server`);
    //     })
    // })

    console.log(`client connected to websocket server`);
/*
    {
        "type":"join",
        "payload":{
            "room":"red"
        }
    }
    {
        "type":"chat",
        "payload":{
            "message":"welcome to room red"
        }
    }
*/
    socket.on("message",(message)=>{
        const parsedMessage = JSON.parse(message);
        console.log(parsedMessage)
        if(parsedMessage.type === "join"){
            allSockets.push({
                socket,
                room:parsedMessage.payload.room
            })
        }

        if(parsedMessage.type === "chat"){
            let currentUserRoom;
            for(let i=0;i<allSockets.length;i++){
                if(allSockets[i].socket===socket){
                    currentUserRoom=allSockets[i].room;
                }
            }
            console.log(currentUserRoom)
            console.log(parsedMessage.payload.message)
            for(let i=0;i<allSockets.length;i++){
                if(allSockets[i].room===currentUserRoom){
                    allSockets[i].socket.send(parsedMessage.payload.message)
                }
            }

        }
        
    })
})