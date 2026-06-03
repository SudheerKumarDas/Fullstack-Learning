import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const register = async (req,res) => {
        try {
            const {name, email, password} = req.body;

            const existingUser = await User.findOne({email});

            if(existingUser){
                return res.status(400).json({
                    message:"User already exists"
                })
            }

            const hashedPassword = await bcrypt.hash(password,10);

            const user = await User.create(
                {
                    name,
                    email,
                    password : hashedPassword
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
}