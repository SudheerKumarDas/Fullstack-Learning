import express from "express";

import todoRoutes from "./routes/todo.routes.js"
import userRoutes from "./routes/user.routes.js"

const app = express();

app.use(express.json());

app.use("/todos",todoRoutes);
app.use("/users/",userRoutes);

export default app;