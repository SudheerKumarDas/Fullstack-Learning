import express from "express";

import "dotenv/config";

import redisClient from "./src/config/redis.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.json({
        message:"Redis learning API"
    })
})

app.listen(PORT,()=>{
    console.log(`App is listening on port http://localhost:${PORT}`);
})