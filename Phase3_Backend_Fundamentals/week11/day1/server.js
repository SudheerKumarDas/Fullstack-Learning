import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";

import authRoutes from "./Routes/authRoutes.js"

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/auth",authRoutes);

const PORT = process.env.PORT || 3000;



connectDB();

app.listen(3000,()=>{
    console.log("Server is listening to the port:3000")
})