import { redisClientForPublisher, redisClientForSubscriber } from "./src/redis.js";

await redisClientForSubscriber.subscribe("notifications",(message)=>{
    const parsedData = JSON.parse(message);
    console.log(`notification from publisher : ${parsedData.userId} says ${parsedData.message}`);
})

await redisClientForPublisher.publish("notifications",JSON.stringify({
    userId:123,
    message:"Hello subscriber from publisher"
}))

