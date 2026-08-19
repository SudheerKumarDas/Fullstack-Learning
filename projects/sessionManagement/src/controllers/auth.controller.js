import User from "../models/User.js";
import Session from "../models/Session.js";

import crypto from "crypto";

export const userRegister = async (req,res) => {
    try {
        const { name, email, password } = req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                message:"provide credentials"
            })
        }
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(409).json({
                message:"User already registered"
            })
        }
        const newUser = await User.create({
            name,
            email,
            password
        })
        res.status(201).json({
            message:"User registered successfully"
        })
    } catch (error) {
        console.error(`Error registering user ${error}`);
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

export const userLogin = async (req,res) => {
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({
                message:"Invalid Credentials"
            })
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        }
        const sessionId = crypto.randomBytes(32).toString('hex');
        const expiresAt = new Date(Date.now()+60*60*1000);
        const newSession = await Session.create({
            sessionId:sessionId,
            userId:user._id,
            expiresAt:expiresAt
        })
        res.cookie("sessionId",sessionId,{
            httpOnly:true,
            secure:false,
            samesite:"lax",
            expires:expiresAt
        })
        res.status(200).json({
            message:"Login successful"
        })
    } catch (error) {
        console.error(`Error user logging in ${error}`);
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

export const userInfo = async (req,res) => {
    try {
        const user = req.user;
        console.log(user);
        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        }
        res.status(200).json({
            message:"User found successfully",
            user:user
        })
    } catch (error) {
        console.error(`Error in getting user ${error}`);
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}