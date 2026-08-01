import User from "../models/user.model.js";
import sendVerificationEmail from "../utils/sendVerificationEmail.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";

export const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Insufficient data",
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "User already registered",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const rawVerificationToken = crypto.randomBytes(32).toString("hex");
    const hashedVerificationToken = crypto
      .createHash("sha256")
      .update(rawVerificationToken)
      .digest("hex");

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      verificationToken: hashedVerificationToken,
      verificationTokenExpires: Date.now() + 60 * 60 * 1000,
    });

    await sendVerificationEmail(newUser.email, rawVerificationToken);

    res.status(201).json({
      message:
        "User created successfully, Now check your email for verification",
    });
  } catch (error) {
    console.error(`Error registering user ${error}`);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;
    if (!token) {
      return res.status(400).json({
        message: "Token not found",
      });
    }
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await User.findOne({
      verificationToken: hashedToken,
      verificationTokenExpires: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({
        message: "Invalid or expired verification token",
      });
    }
    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpires = undefined;

    await user.save();

    res.status(200).json({
      message: "Email verified successfully",
    });
  } catch (error) {
    console.error(`Error verifying email ${error}`);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const resendEmailVerification = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        message: "Provide email",
      });
    }
    const user = await User.findOne({
      email,
    });
    if (!user) {
      return res.status(404).json({
        message: "Email not found",
      });
    }
    if (user.isVerified) {
      return res.status(400).json({
        message: "Email already verified",
      });
    }
    const rawVerificationToken = crypto.randomBytes(32).toString("hex");
    const hashedVerificationToken = crypto
      .createHash("sha256")
      .update(rawVerificationToken)
      .digest("hex");

    user.verificationToken = hashedVerificationToken;
    user.verificationTokenExpires = Date.now() + 60 * 60 * 1000;

    await user.save();
    await sendVerificationEmail(user.email, rawVerificationToken);

    res.status(200).json({
      message: "verification email resent",
    });
  } catch (error) {
    console.error(`Error resending email verification ${error}`);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: "provide email or password",
      });
    }
    const user = await User.findOne({
      email,
    });
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    if (!user.isVerified) {
      return res.status(403).json({
        message: "User not verified",
      });
    }
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );
    res.status(200).json({
      message: "User login successful",
      data:{
        user:user,
        token:token
      }
    });
  } catch (error) {
    console.error(`Error logging user ${error}`);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
