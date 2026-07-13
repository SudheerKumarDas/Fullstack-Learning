import bcrypt from "bcrypt";

import User from "../models/users.models.js";

export const userRegister = async (req,res) => {
    try {
        const {username,email,password}=req.body;
        if(!username || !email || !password){
            res.status(401).json({
                message:"Not enough credentials"
            })
        }
        const user = await User.findOne({
            $or:[
                {username:username},
                {email:email}
            ]
        })
        if(user){
            return res.status(409).json({
                message:"User already exists"
            })
        }
        const hashedPassword = bcrypt.hash(password,10);
        const createdUser = await User.create({
            username:username,
            email:email,
            password:hashedPassword
        })
        res.status(201).json({
            message:"User created successfully",
            createdUser:{
                user:createdUser
            }
        })
    } catch (error) {
        console.error(`Error registering user ${error}`);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}