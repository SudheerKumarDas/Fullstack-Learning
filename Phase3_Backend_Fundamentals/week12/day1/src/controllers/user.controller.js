import userModel from "../models/user.model.js";

export const register = async (req,res) => {
    try {
        const {username, email, password}=req.body;
        if(!username || !email || !password){
            return res.status(403).json({
                message:"provide all the fields"
            })
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await userModel.create({
            username,
            email,
            password:hashedPassword
        })
        res.status(201).json({
            message:"User registered successfully",
            user:{
                username:user.username,
                email:user.email
            }
        })
    } catch (error) {
        console.error("Error registering user ",error);
        res.status(500).json({
            message:"Internal server failed"
        })
    }
}