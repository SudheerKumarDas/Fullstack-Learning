import express from "express"

const router = express.Router();

router.post("/create",(req,res)=>{
    const {title,description,completed}=req.body;
    
})