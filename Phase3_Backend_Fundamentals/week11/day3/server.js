import express from "express"
import jwt from "jsonwebtoken"

import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const JWT_SECRET = "randomsecretstring";

const app = express();

const users=[];

app.use(express.json());

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/signup",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    if(!username || !password){
        return res.json({
            message:"username or password are required"
        })
    }
    for(let i=0;i<users.length;i++){
        if(username === users[i].username){
            return res.json({
                message:"user already exits"
            })
        }
    }
    const user = {
        username:username,
        password:password
    }
    users.push(user);
    res.json({
        message:"user signed up successfully"
    })
})

app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    if(!username || !password){
        return res.json({
            message:"username or password are required"
        })
    }
    let foundUser = null;
    for(let i=0;i<users.length;i++){
        if(username === users[i].username){
             foundUser = users[i];
        }
    }
    if(!foundUser){
        return res.json({
            message:"user not found"
        })
    }
    const token = jwt.sign({
        username:username,
        password:password,
        courses:[]
    },JWT_SECRET)
    res.json({
        foundUser,
        token
    })
})

const auth = (req,res,next) => {
        const token = req.headers.token;
        const decodedInformation = jwt.verify(token,JWT_SECRET);
        if(!decodedInformation){
            res.json({
                message:"invalid token"
            })
            return;
        }
        req.username = decodedInformation.username;
        next();
}
app.get("/me",auth,(req,res)=>{
    // const token = req.headers.token;
    // const decodedInformation = jwt.verify(token,JWT_SECRET);
    // const unAuthDecodedInfo = jwt.decode(token);
    // console.log(unAuthDecodedInfo);
    // const username = decodedInformation.username;

    //const user = req.username;
    let foundUser=null;
    for(let i=0;i<users.length;i++){
        if(users[i].username===req.username){
            foundUser=users[i];
        }
    }
    if(foundUser){
        res.json({
            username:foundUser.username,
            password:foundUser.password
        })
    }else{
        res.json({
            message:"invalid token"
        })
    }
})

app.listen(3000)