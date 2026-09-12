import { createClient } from "redis";

const redisClientForPublisher = createClient({
  url: "redis://localhost:6379",
});

const redisClientForSubscriber = createClient({
  url: "redis://localhost:6379",
});

redisClientForPublisher.on("error", (error) => {
  console.error(`Error connecting redis client for publisher: ${error}`);
});

redisClientForSubscriber.on("error", (error) => {
  console.error(`Error connecting redis client for subscriber: ${error}`);
});

await redisClientForPublisher.connect();
console.log(`Redis client connected for publisher...`);

await redisClientForSubscriber.connect();
  console.log(`Redis client connected for subscriber...`);

export  { 
    redisClientForPublisher,
    redisClientForSubscriber
}
