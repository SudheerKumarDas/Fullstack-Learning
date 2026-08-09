import { createClient } from "redis";

const redisClient = await createClient({
    url:process.env.REDIS_URL
});

redisClient.on("error",(err)=>{
    console.error("Redis error :",err);
})

await redisClient.connect();

console.log("Redis connected");

export default redisClient;