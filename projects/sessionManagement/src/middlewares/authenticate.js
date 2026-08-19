import Session from "../models/Session.js";
import User from "../models/User.js";

export const authMiddleware = async (req,res,next) => {
    try {
        const { sessionId } = req.cookies;
        if(!sessionId){
            res.status(400).json({
                message:"Session Id not provided"
            })
        }
        const existingSession = await Session.findOne({sessionId});
        if(!existingSession){
            res.status(404).json({
                message:"Expired or Invalid session Id"
            })
        }
        const user = await User.findById(existingSession.userId);
        req.user = user;
        next();
    } catch (error) {
        console.error(`Error in authenticating middleware ${error}`)
    }
}