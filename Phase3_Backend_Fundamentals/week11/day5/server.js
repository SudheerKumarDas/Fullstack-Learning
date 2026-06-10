import express from "express";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

import { connectDB } from "./src/config/db.js";
import User from "./src/models/user.model.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("server is running...");
});

app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        error: "Email already registered...",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    res.status(201).json({
      message:"User registered successfully..."
    })
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        error: "Email already registered...",
      });
    }
    return res.status(500).json({
      error: "Internal server error",
    });
  }
});

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server is listening on port ", PORT);
  });
});
