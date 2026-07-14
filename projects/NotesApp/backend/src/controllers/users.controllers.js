import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/users.models.js";

export const userRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(401).json({
        message: "Not enough credentials",
      });
    }
    const user = await User.findOne({
      $or: [{ username: username }, { email: email }],
    });
    if (user) {
      return res.status(409).json({
        message: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    const userResponse = createdUser.toObject();
    delete userResponse.password;
    res.status(201).json({
      message: "User created successfully",
      createdUser: {
        user: userResponse,
      },
    });
  } catch (error) {
    console.error(`Error registering user ${error}`);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: "provide all credentials",
      });
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(404).json({
        message: "User not registered",
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    res.cookie("token",token,{
        httpOnly:true,
        secure:process.env.NODE_ENV==="production",
        sameSite:"strict",
        maxAge:7*24*60*60*1000
    })
    const userResponse = user.toObject();
    delete userResponse.password;

    res.status(200).json({
        message:"User login successfully",
        token:token,
        user:userResponse
    })
  } catch (error) {
    console.error(`Error user logging in ${error}`);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};


export const getUserInfo = async (req,res) => {
  try {
        const { id } = req.params.id;
        const user = await User.findById(id);
        res.status(200).json({
          message:"user fetched successfully",
          user:user
        })
  } catch (error) {
    console.error(`Error getting user info ${error}`);
    res.status(500).json({
      message: "Internal server error",
    });
  }
}