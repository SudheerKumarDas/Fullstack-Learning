import { createClient } from "redis";

const redisClient = createClient({
    url:process.env.REDIS_URL || "redis://localhost:6379"
})

redisClient.on("error",(error)=>{
    console.error(`Redis Error : ${error}`);
})

const connectRedis = async () => {
    try {
        await redisClient.connect();
        console.log(`Redis connected successfully...`)
    } catch (error) {
        console.error(`Error connecting redis : ${error}`);
        process.exit(1);
    }
}

export { redisClient }
export default connectRedis;