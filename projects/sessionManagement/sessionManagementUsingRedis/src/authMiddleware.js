import { redisClient } from "./redis.js";
import User from "./User.js";

export const authMiddleware =async(req,res,next)=>{
    try {
        const { sessionId } = req.cookies;
        if(!sessionId){
            return res.status(401).json({
                message:"Login First"
            })
        }
        const userId = await redisClient.get(`session:${sessionId}`);
        if(!userId){
            return res.status(401).json({
                message:"Invalid or Expired session id"
            })
        }
        const user = await User.findById(userId);
        if(!user){
            return res.status(401).json({
                message:"User not found"
            })
        }
        req.user = user;
        next();
    } catch (error) {
        console.error(`Error authenticating`);
    }
}