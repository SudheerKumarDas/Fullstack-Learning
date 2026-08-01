import User from "../models/user.model.js"
import sendVerificationEmail from "../utils/sendVerificationEmail.js"
import bcrypt from "bcrypt"
import crypto from "crypto"

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
        const hashedPassword = await bcrypt.hash(password,10);

        const rawVerificationToken = crypto.randomBytes(32).toString('hex');
        const hashedVerificationToken = crypto.createHash('sha256').update(rawVerificationToken).digest('hex');

        const newUser = await User.create({
            name,
            email,
            password:hashedPassword,
            verificationToken:hashedVerificationToken,
            verificationTokenExpires:Date.now() + 60*60*1000
        })

        await sendVerificationEmail();

        res.status(201).json({
            message:"User created successfully, Now check your email for verification"
        })
    } catch (error) {
        console.error(`Error registering user ${error}`);
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}