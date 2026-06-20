import express from "express";

import todoRoutes from "./routes/todo.routes.js"

const app = express();

app.use(express.json());

app.use("/api/v1/todo",todoRoutes);

export default app;