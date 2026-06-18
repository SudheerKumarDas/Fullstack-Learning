import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username);
    if (!username || !email || !password) {
      return res.status(403).json({
        message: "provide all the fields",
      });
    }

    const alreadyRegistered = await userModel.findOne({
      $or: [{ email }, { username }],
    });
    if (alreadyRegistered) {
      return res.status(409).json({
        message: "username or email already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });
    console.log(user);
    res.status(201).json({
      message: "User registered successfully",
      user: {
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error registering user ", error);
    res.status(500).json({
      message: "Internal server failed",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(409).json({
        message: "provide all credentials",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(403).json({
        message: "User not found",
      });
    }

    console.log(user);

    const isMatchPassword = await bcrypt.compare(password, user.password);

    console.log(isMatchPassword);

    if (!isMatchPassword) {
      return res.status(403).json({
        message: "credentials not match",
      });
    }

    const refreshToken = await jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    console.log(refreshToken);

    const refreshTokenHash = bcrypt.hash(refreshToken, 10);

    const accessToken = await jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "15m",
      },
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: "logged in successfully",
      user: {
        username: user.username,
        email: user.email,
      },
      accessToken,
    });
  } catch (error) {
    console.error("Error logging in ", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getMe = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "token not provided",
      });
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({
        message: "token not valid",
      });
    }
    const user = await userModel.findById(decoded.id);

    res.status(200).json({
      message: "user fetched successfully",
      user: {
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error logging in ", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    console.log(refreshToken)
    if (!refreshToken) {
      return res.status(401).json({
        message: "Refresh token not found",
      });
    }
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
    const accessToken = jwt.sign(
      {
        id: decoded.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "15m",
      },
    );
    res.status(200).json({
        message:"Access token refreshed successfully",
        accessToken
    })
  } catch (error) {
    console.error("Error in getting access token ", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
