import bcrypt, { hash } from "bcrypt"
import jwt from "jsonwebtoken"

import User from "../models/User.js";
import Todo from "../models/Todo.js";

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
            id:user._id,
            username:user.username,
            email:user.email
        })
    } catch (error) {
        console.error("Error creating user ",error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

export const userLogin = async (req,res) => {
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                message:"provide the fields"
            })
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        }
        const isPasswordMatch = await bcrypt.compare(password,user.password);
        if(!isPasswordMatch){
            return res.status(401).json({
                message:"Invalid credentials"
            })
        }
        const userResponse = {
            username:user.username,
            email:user.email
        }
        const accessToken = jwt.sign({
            id:user._id
        },process.env.ACCESS_TOKEN,{
            expiresIn:"2h"
        })
        res.status(200).json({
            message:"User logged in successfully",
            user:userResponse,
            accessToken:accessToken
        })
    } catch (error) {
        console.error("Error logging user ",error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

export const userInfo = async (req,res) => {
    try {
        const id = req.id;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        }
        const userResponse={
            username:user.username,
            email:user.email
        }
        res.status(200).json({
            message:"User info page",
            user:userResponse
        })
    } catch (error) {
        console.error("Error logging user ",error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

export const userTodos = async (req,res) => {
    try {
        const id = req.id;
        const todos = await Todo.find({userId:id},{title:1,description:1,completed:1,_id:0})
        if(!todos){
            return res.status(404).json({
                message:"No todos available for the user"
            })
        }
        res.status(200).json({
            message:"fetched user todos successfully",
            todos:todos
        })
    } catch (error) {
        console.error("Error logging user ",error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}
