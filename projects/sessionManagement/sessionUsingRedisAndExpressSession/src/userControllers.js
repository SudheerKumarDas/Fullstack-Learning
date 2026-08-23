import User from "./User.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { redisClient } from "./redis.js"

export const userRegister = async (req,res) => {
    try {
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            return res.status(401).json({
                message:"Please provide all fields"
            })
        }
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(409).json({
                message:"User already exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password,10);
        await User.create({
            name,
            email,
            password:hashedPassword
        })
        res.status(201).json({
            message:"User registered successfully"
        })
    } catch (error) {
        console.error(`Error in user register`);
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

export const userLogin = async (req,res) => {
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(401).json({
                message:"Please provide all fields"
            })
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({
                message:"Provide valid credentials"
            })
        }
        const isPasswordMatch = await bcrypt.compare(password,user.password);
        if(!isPasswordMatch){
            return res.status(404).json({
                message:"Provide valid credentials"
            })
        }
        
        const sessionDuration = 60;

        req.session.userId = user._id.toString();
        
        res.status(200).json({
            message:"User logged in successfully",
            user:user
        })
    } catch (error) {
        console.error(`Error in user login`);
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

export const userInfo = async (req,res) => {
    try {
        const user = req.user;
        res.status(200).json({
            message:"User Info fetched successfully",
            user:user
        })
    } catch (error) {
         console.error(`Error in getting user info`);
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}