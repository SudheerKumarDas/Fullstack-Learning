import User from "../models/user.model.js"
import bcrypt from "bcrypt"

export const userRegister = async (req,res) => {
    try {
        const {name,email,password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                message:"Insufficient data"
            })
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(409).json({
                message:"User already registered"
            })
        }
        const newUser = await User.create({
            name,
            email,
            password
        })
    } catch (error) {
        console.error(`Error registering user ${error}`);
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}