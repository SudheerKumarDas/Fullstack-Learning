import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./src/config/db.js";
import userRoutes from "./src/routes/user.route.js";
import noteRoutes from "./src/routes/note.route.js"

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/user",userRoutes);
app.use("/api/note",noteRoutes);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server is listening on port ", PORT);
  });
});
