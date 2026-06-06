import express from "express"
import jwt from "jsonwebtoken"
const JWT_SECRET = "randomsecretstring";

const app = express();

const users=[];

app.use(express.json());

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

app.listen(3000)