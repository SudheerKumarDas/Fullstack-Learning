import bcrypt, { hash } from "bcrypt"

import User from "../models/User.js";

export const userRegister = async (req,res) => {
    try {
        const {username,email,password}=req.body;
        if(!username || !email || !password){
            return res.status(400).json({
                message:"provide all the fields"
            })
        }
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(409).json({
                message:"Email already registered"
            })
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({
            username,
            email,
            password:hashedPassword
        })
        res.status(201).json({
            message:"User created successfully",
            user:user
        })
    } catch (error) {
        console.error("Error creating user ",error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}