import express from "express"

import Todo from "../models/Todo.js";

const router = express.Router();

router.post("/create",(req,res)=>{
    const {title,description,completed}=req.body;
    if(!title || !description || !completed){
        return res.status(409).json({
            message:"Provide all the fields"
        })
    }
    const todo = await 
})