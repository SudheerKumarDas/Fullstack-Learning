import express from "express"
import dotenv from "dotenv"

dotenv.config();

const app = express();

app.use(express.json());

const users=[];

app.post("/signup",(req,res)=>{
    const {username,password}=req.body;
    if(!username || !password){
        res.status(400).json(
            {
                message:"provide username and password both"
            }
        )
        return
    }
    const user = {
        username:username,
        password:password
    }
    if(users.find(user=>user.username===username)){
        res.status(300).json(
            {
                message:"user already exists"
            }
        )
        return
    }
    users.push(user);
    res.status(200).json(
        {
            message:"User signed up successfully",
            data:user,
            allUsers:users
        }
    )
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server has started at port ${PORT}`);
})