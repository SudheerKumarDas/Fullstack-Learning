import User from "./User.js";
import bcrypt from "bcrypt";

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