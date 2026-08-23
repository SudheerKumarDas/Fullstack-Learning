import "dotenv/config";
import connectRedis,{redisClient} from "./src/redis.js";

import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";

import connectDB from "./src/db.js";
import userRoutes from "./src/userRoutes.js";
import { RedisStore } from "connect-redis";


const app = express();

const redisStore = new RedisStore({
  client:redisClient,
  prefix:"session:"
})

app.use(express.json());
app.use(cookieParser());
app.use(session({
    store:redisStore,
    secret:"myrandomsecret",
    resave:false,
    saveUninitialized:false,
    cookie:{
        httpOnly:true,
        secure:false,
        sameSite:"lax",
        maxAge:60*1000
    }
}))

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;

connectRedis().then(() => {
  connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT:${PORT}`);
    });
  });
});
