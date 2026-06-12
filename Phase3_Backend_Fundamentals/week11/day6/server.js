import express from "express"
import dotenv from "dotenv"

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.post("/signup",(req,res)=>{

})

app.post("/signin",(req,res)=>{

})

app.post("/todo",(req,res)=>{

})

app.get("/todos",(req,res)=>{

})

app.listen(PORT, ()=>{
    console.log("server is listening to the port ", PORT);
})