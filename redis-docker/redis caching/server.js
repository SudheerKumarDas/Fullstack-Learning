import express from "express";

import "dotenv/config";

import redisClient from "./src/config/redis.js";
import connectDB from "./src/config/db.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Redis learning API",
  });
});

app.get("/redis-test", async (req, res) => {
  await redisClient.set("name", "Alex");
  const name = await redisClient.get("name");
  res.json({
    name,
  });
});

app.get("/test-expiration", async (req, res) => {
  await redisClient.set("temporary", "Hello Redis", {
    EX: 30,
  });
  res.json({
    message: "Key will expire in 30 seconds",
  });
});

app.get("/visit",async(req,res)=>{
    const count = await redisClient.incr("visits");
    res.json({
        visits:count
    })
})

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`App is listening on port http://localhost:${PORT}`);
  });
});
