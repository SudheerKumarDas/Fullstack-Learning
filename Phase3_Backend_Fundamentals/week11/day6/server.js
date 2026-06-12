import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken"

import { connectDB } from "./src/config/db.js";
import { todoModel, userModel } from "./src/models/dbModel.js";
import { auth } from "./src/middlewares/auth.js";

dotenv.config();

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 3000;

app.post("/signup",async (req, res) => {
    const {name,email,password} = req.body;
    await userModel.insertOne({
        name:name,
        email:email,
        password:password
    })
    res.json({
        message:"you are signed up successfully"
    })
});

app.post("/signin",async (req, res) => {
    const {email,password}=req.body;

    const user = await userModel.findOne({
        email:email,
        password:password
    })
    if(user){
        const token = jwt.sign({
            id:user._id.toString()
        },process.env.JWT_SECRET)

        res.json({
            token:token
        })
    }else{
        res.status(403).json({
            message:"Invalid credentials"
        })
    }
});

app.post("/todo", auth, async (req, res) => {
    const userId = req.userId;
    const {title,description}=req.body;
    const todo = await todoModel.create({
        title:title,
        description:description,
        userId:userId
    })
    res.status(201).json({
        message:"todo created successfully",
        userId:userId,
        todo
    })
});

app.get("/todos", auth, async (req, res) => {
    const userId = req.userId;
    const todos = await todoModel.find({
        userId:userId
    })
    res.json({
        todos:todos
    })
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server is listening to the port ", PORT);
  });
});
