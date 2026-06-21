import express from "express";

import todoRoutes from "./routes/todo.routes.js"
import userRoutes from "./routes/user.routes.js"

const app = express();

app.use(express.json());

app.use("/api",todoRoutes);
app.use("/api/users/",userRoutes);

export default app;