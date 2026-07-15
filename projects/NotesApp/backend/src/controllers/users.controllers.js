import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler.js";

import User from "../models/users.models.js";

export const userRegister = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(401);
    throw new Error("Not enough credentials");
  }

  const user = await User.findOne({
    $or: [{ username: username }, { email: email }],
  });

  if (user) {
    return res.status(409);
    throw new Error("User already exists");
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
    success: true,
    message: "User created successfully",
    data: userResponse,
  });
});

export const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(401);
    throw new Error("provide all credentials");
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    res.status(404);
    throw new Error("User not registered");
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    res.status(401);
    throw new Error("Invalid credentials");
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

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  const userResponse = user.toObject();
  delete userResponse.password;

  res.status(200).json({
    success: true,
    message: "User login successfully",
    data: {
      token: token,
      userResponse: userResponse,
    },
  });
});

export const getUserInfo = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const user = await User.findById(id);
  res.status(200).json({
    success: true,
    message: "user fetched successfully",
    data: user,
  });
});

export const userLogout = asyncHandler(async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    success: true,
    message: "User logged out successfully",
  });
});
