import jwt from "jsonwebtoken"

export const authUser = async (req,res,next) => {
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(400).json({
                message:"Token not found"
            })
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            return res.status(404).json({
                message:"invalid credentials"
            })
        }
        const id = decoded.id;
        req.body.id=id;
        next();
    } catch (error) {
        console.error(`Error in authenticating user ${error}`);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}