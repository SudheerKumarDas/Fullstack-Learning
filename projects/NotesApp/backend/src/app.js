import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"

import userRoutes from "./routes/users.routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth",userRoutes);

export default app;