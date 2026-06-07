import express from "express"
import dotenv from "dotenv"

import connectDB from "./config/db.js";

dotenv.config();

const app = express()

const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("you are the server endpoint")
});

connectDB()
.then(()=>{
        app.listen(PORT,()=>{
        console.log("server is running on the port 3000")
    })
})

