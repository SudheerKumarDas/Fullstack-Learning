import jwt from "jsonwebtoken"

const protect = async (req,res) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({
            error:"Not authorized , please login"
        })
    }

    const token = authHeader.split(" ")[1];

    const decoded = 
}