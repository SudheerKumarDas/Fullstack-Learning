import User from "../models/User.js";
import Session from "../models/Session.js";

export const userRegister = async (req,res) => {
    try {
        const { name, email, password } = req.body;
        if(!name || !email || !password){
            return res.status(400).json({
                message:"provide credentials"
            })
        }
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(409).json({
                message:"User already registered"
            })
        }
        const newUser = await User.create({
            name,
            email,
            password
        })
        res.status(201).json({
            message:"User registered successfully"
        })
    } catch (error) {
        console.error(`Error registering user ${error}`);
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}
