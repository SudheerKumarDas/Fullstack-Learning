import express from "express";
import cors from "cors";

import userRoutes from "./routes/users.routes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth",userRoutes);

export default app;