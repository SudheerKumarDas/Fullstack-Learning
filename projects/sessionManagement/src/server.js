import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

const PORT = process.env.PORT || PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/users", userRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening to the PORT:${PORT}`);
  });
});
