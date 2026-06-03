import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import User from "./models/User.js"

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/api/auth/register", async (req,res) => {
        try {
            const {name, email, password} = req.body;

            const existingUser = await User.findOne({email});

            if(existingUser){
                return res.status(400).json({
                    message:"User already exists"
                })
            }

            const user = await User.create(
                {
                    name,
                    email,
                    password
                }
            )
            res.status(201).json(
                {
                    message:"User created successfully"
                }
            )
        } catch (error) {
            console.log("Error registering user",error);
            res.status(500).json({
                message:"Internal server error"
            })
        }
})

connectDB();

app.listen(3000,()=>{
    console.log("Server is listening to the port:3000")
})