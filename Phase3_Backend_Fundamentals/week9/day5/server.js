import express from "express";
import userRoutes from "./routes/users.js"

const PORT = 3000;

const app = express();

app.use(express.json());

app.use("/users",userRoutes);

app.listen(PORT, ()=>{
    console.log("Server is listening on http://localhost:3000");
})