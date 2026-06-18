import userModel from "../models/user.model.js";

export const register = async (req,res) => {
    try {
        const {username, email, password}=req.body;
        if(!username || !email || !password){
            return res.status(403).json({
                message:"provide all the fields"
            })
        }

        const alreadyRegistered = await userModel.findOne({
            $or:[
                {email},
                {username}
            ]
        })
        if(alreadyRegistered){
            return res.status(409).json({
                message:"username or email already exists";
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

export const login = async (req,res) => {
    try {
        const {email,password}=req.body;
        if(!email || !password) {
            return res.status(409).json({
                message:"provide all credentials"
            })
        }
        const userFound = await userModel.findOne({email});
        if(!userFound){
            return res.status(403).json({
                message:"User not found"
            })
        }

        const isMatchPassword = await bcrypt.compare(password,userFound.password)
        if(isMatchPassword){
            return res.status(403).json({
                message:""
            })
        }
    } catch (error) {
        
    }
}