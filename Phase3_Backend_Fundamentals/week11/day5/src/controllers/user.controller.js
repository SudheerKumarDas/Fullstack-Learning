import bcrypt from "bcryptjs";

import User from "../models/user.model.js";

export const userRegister = async (req, res) => {
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
}

export const userLogin = async (req,res) => {
    try {
        const {email,password}=req.body;
        const foundUser = await User.findOne({email});
        if(!foundUser){
            return res.status(404).json({
                error:"User does not exist..."
            })
        }
        res.status(201).json({
            message:"User logged in successfully",
            username:foundUser.username
        })
    } catch (error) {
        console.log("Error in user login...",error)
        return res.status(500).json({
            error:"Internal server error"
        })
    }
}