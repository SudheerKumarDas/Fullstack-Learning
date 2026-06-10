import express from "express";
import bcrypt from "bcryptjs";

import User from "./src/models/user.model.js";

const router = express.Router();

router.post("/register", async (req, res) => {
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

export default router;