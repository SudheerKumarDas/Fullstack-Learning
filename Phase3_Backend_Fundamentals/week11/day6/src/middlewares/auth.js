import jwt from "jsonwebtoken"

export const auth = (req,res,next) => {
    const token = req.headers.token;
    const decodedData = jwt.verify(token,process.env.JWT_SECRET)
    if(decodedData){
        req.userId = decodedData.id;
        next();
    }else{
        res.status(403).json({
            message:"incorrect credentials"
        })
    }
}