import jwt from "jsonwebtoken"

export const authUser = async (req,res,next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if(!token){
            return res.status(400).json({
                message:"Token not provided"
            })
        }
        const decoded = await jwt.verify(token,process.env.ACCESS_TOKEN);
        if(!decoded){
            return res.status(409).json({
                message:"Credentials not matched"
            })
        }
        req.id=decoded.id;
        next();
    } catch (error) {
        console.error("Error in authenticating user",error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}