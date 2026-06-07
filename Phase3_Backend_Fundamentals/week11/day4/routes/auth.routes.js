import express from "express";
import jwt from "jsonwebtoken"

import User from "../model/User.model.js";
import { protect } from "../middleware/auth.middleware.js";

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

router.post("/login", async (req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({
                error:"Email and Password are required both"
            })
        }
        const foundUser = await User.findOne({email}).select("+password");

        if(!foundUser){
            return res.status(401).json({
                error:"Invalid email or password"
            })
        }
        const isPasswordCorrect = await foundUser.comparePassword(password)
        if(!isPasswordCorrect){
            return res.status(401).json({
                error:"invalid email or password"
            })
        }
        const token = generateToken(foundUser._id);
        res.json({
            message:"Logged in successfully",
            token,
            user:{
                id:foundUser._id,
                name:foundUser.name,
                email:foundUser.email
            }
        })

    } catch (error) {
        res.status(500).json({
            error:"Server error, Please try again later"
        })
    }
})

router.get("/me",protect, (req,res)=>{    
    // try {
    //     const user = req.user;
    //     res.json({
    //         id:user._id,
    //         email:user.email,
    //         name:user.name
    //     })
    // } catch (error) {
    //     console.log("Error in getting user",error);
    //     res.status(500).json({
    //         error:"server failed"
    //     })
    // }

    const {_id:id,name,email} = req.user;
    res.json({
        id,
        name,
        email
    })
})