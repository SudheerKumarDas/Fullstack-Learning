import "dotenv/config";
import connectRedis from "./src/redis.js";

import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";

import connectDB from "./src/db.js";
import userRoutes from "./src/userRoutes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;

connectRedis().then(() => {
  connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT:${PORT}`);
    });
  });
});
