import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./src/config/db.js";
import { userModel } from "./src/models/dbModel.js";

dotenv.config();

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 3000;

app.post("/signup",async (req, res) => {
    const {name,email,password} = req.body;
    await userModel.insertOne({
        name:name,
        email:email,
        password:password
    })
    res.json({
        message:"you are signed up successfully"
    })
});

app.post("/signin", (req, res) => {});

app.post("/todo", (req, res) => {});

app.get("/todos", (req, res) => {});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server is listening to the port ", PORT);
  });
});
