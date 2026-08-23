import Session from "../models/Session.js";
import User from "../models/User.js";

export const authMiddleware = async (req,res,next) => {
    try {
        const { sessionId } = req.cookies;
        if(!sessionId){
            return res.status(401).json({
                message:"Session Id not provided"
            })
        }
        const existingSession = await Session.findOne({sessionId});
        if(!existingSession){
            return res.status(404).json({
                message:"Expired or Invalid session Id"
            })
        }
        if(existingSession.expiresAt < new Date()){
            await Session.deleteOne({
                _id:existingSession._id
            })
            return res.status(401).json({
                message:"Session Expired"
            })
        }
        const user = await User.findById(existingSession.userId);
        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        }
        req.user = user;
        next();
    } catch (error) {
        console.error(`Error in authenticating middleware ${error}`)
    }
}