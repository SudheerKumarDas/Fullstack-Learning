import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";

import connectDB from "./src/db.js";
import userRoutes from "./src/userRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on PORT:${PORT}`);
  });
});
