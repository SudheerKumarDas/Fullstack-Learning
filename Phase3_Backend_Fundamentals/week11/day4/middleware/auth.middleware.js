import jwt, { JsonWebTokenError } from "jsonwebtoken"
import User from "../model/User.model.js";

export const protect = async (req,res,next) => {
    try {
        const authHeader = req.headers.authorization;

        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({
                error:"Not authorized , please login"
            })
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        const user = await User.findById(decoded.id);

        if(!user){
            return res.status(401).json({
                error:"User no longer exists"
            })
        }
        req.user = user;
        next();
        
    } catch (error) {
        if(error.name==="JsonWebTokenError"){
            return res.status(401).json({
                error:"Invalid token."
            })
        }
        if(error.name==="TokenExpiredError"){
            return res.status(401).json({
                error:"Token expired. please log in again"
            })
        }
        res.status(500).json({
            error:"Authentication error"
        })
    }
}
