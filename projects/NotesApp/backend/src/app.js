import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"

import userRoutes from "./routes/users.routes.js";
import notesRoutes from "./routes/notes.routes.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/auth",userRoutes);
app.use("/api/notes",notesRoutes);

export default app;