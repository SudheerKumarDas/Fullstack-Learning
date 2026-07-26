import express from "express"

import moviesRoutes from "./routes/movies.routes.js"

const app = express();

app.use(express.json());

app.use("/api/v1/movies",moviesRoutes);

export default app;