import express from "express";
import jwt from "jsonwebtoken"

import User from "../model/User.model.js";

const router = express.Router();

const generateToken = (userId) => {
    return jwt.sign({
                id:userId
            },
                process.env.JWT_SECRET ,
            {
                expiresIn:"7d"
            }
        )
    }

router.post("/register",async (req,res)=>{
    try {
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                error:"All fields are required"
            })
        }
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                error:"Email already registered"
            })
        }
        const user = await User.create({
            name,
            email,
            password
        })
        const token = generateToken(user._id);

        res.status(201).json({
            message:"Account created successfully",
            token,
            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }
        })
    } catch (error) {
        if(error.name==="ValidationError"){
            const messages = Object.values(error.errors).map((e)=>e.message);
            return res.status(400).json({error:messages.join(", ")})
        }
        res.status(500).json({error: "server error. please try again later"})
    }
})

