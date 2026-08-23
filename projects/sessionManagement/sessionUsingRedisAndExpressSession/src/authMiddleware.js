import User from "./User.js";

export const authMiddleware =async(req,res,next)=>{
    try {
        if(!req.session.userId){
            return res.status(401).json({
                message:"Login First"
            })
        }
        const userId = req.session.userId;
        const user = await User.findById(userId);

        if(!user){
            return res.status(401).json({
                message:"Invalid or Expired session id"
            })
        }
        req.user = user;
        next();
    } catch (error) {
        console.error(`Error authenticating`);
    }
}