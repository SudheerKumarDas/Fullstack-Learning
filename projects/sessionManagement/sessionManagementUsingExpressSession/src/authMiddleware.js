export const authMiddleware =async(req,res,next)=>{
    try {
        if(!req.session.user){
            return res.status(401).json({
                message:"Login First"
            })
        }
        next();
    } catch (error) {
        console.error(`Error authenticating`);
    }
}