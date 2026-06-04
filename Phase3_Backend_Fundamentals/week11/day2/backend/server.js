import express from "express"
import dotenv from "dotenv"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const JWT_SECRET="sudheer";

dotenv.config();

const app = express();

app.use(express.json());

const users=[];

// function generateToken() {
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//     let token = "";
//     for (let i = 0; i < 32; i++) {
//         // use a simple function here
//         token += options[Math.floor(Math.random() * options.length)];
//     }
//     return token;
// }

app.post("/signup",async(req,res)=>{
    const {username,password}=req.body;
    if(!username || !password){
        res.status(400).json(
            {
                message:"provide username and password both"
            }
        )
        return
    }

    const hashedPassword = await bcrypt.hash(password,10);
    const user = {
        username:username,
        password:password             //hashedPassword
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
            data:user
        }
    )
})

app.post("/signin",(req,res)=>{
    const {username,password}=req.body;
    if(!username || !password){
        res.status(300).json(
            {
                message:"provide both username and password"
            }
        )
        return
    }
    const user = users.find(user=>user.username===username&&user.password===password);
    if(!user){
        return res.status(301).json({
            message:"user not found"
        })
    }
    if(user){
        // const token = generateToken();
        const token = jwt.sign({
            username:username
        },JWT_SECRET);

        res.status(201).json(
            {
                message:"User signed in successfully",
                user:{
                    username : username,
                    password : password,
                    token:token
                }
            }
        )
        return;
    }
})

app.get("/me",(req,res)=>{
    const token = req.headers.token;
    const decodedInformation = jwt.verify(token,JWT_SECRET);
    const username = decodedInformation.username;

    const user = users.find(user=>user.username===username);
    
    if(user){
        res.send({
            username:user.username,
            password:user.password
        })
    }else{
        res.status(401).send(
            {
                message:"unauthorized"
            }
        )
    }
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server has started at port ${PORT}`);
})