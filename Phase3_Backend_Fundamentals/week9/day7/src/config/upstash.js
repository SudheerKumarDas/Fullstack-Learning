import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

//create a rate limiter that allows 10 requests per 20 seconds
const rateLimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10,"20 s")
}) 

export default rateLimit;