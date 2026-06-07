import express from "express"
import { protect } from "../middleware/auth.middleware.js";
import Task from "../model/Task.model.js";

const router = express.Router();

router.use(protect)

router.get("/", async (req,res)=>{
    try {
        const filter = {user: req.user._id}

        if(req.query.completed!==undefined){
            filter.completed = req.query.completed === "true";
        }
        if(req.query.priority){
            filter.priority=req.query.priority;
        }

        const tasks = await Task.find(filter).sort({createdAt:-1});

        res.json({
            count:tasks.length,
            tasks
        })
    } catch (error) {
        res.status(500).json({
            error:"Could not fetch the tasks"
        })
    }
})

router.post("/",async(req,res)=>{
    try {
        const {title,description,priority,dueDate}=req.body;

        if(!title){
            return res.status(400).json({
                error:"Title is required"
            })
        }
        const task = await Task.create({
            title,
            description,
            priority,
            dueDate,
            user:req.user._id
        })
        res.status(201).json({
            message:"Task Created",
            task
        })
    } catch (error) {
        if (error.name === "ValidationError") {
            const messages = Object.values(error.errors).map((e) => e.message);
            return res.status(400).json({ 
                error: messages.join(", ") 
            });
        }
            res.status(500).json({ 
                error: "Could not create task." 
            });
        }
})

router.get("/:id",async(req,res) => {
    try {
        const task = await Task.findOne({
            _id:req.params.id,
            user:req.user._id
        })
        if(!task){
            return res.status(404).json({
                message:"Task not found"
            })
        }
        res.json({task})
    } catch (error) {
       res.status(500).json({
        message:"could not fetch task"
       }) 
    }
})

router.put("/:id",async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})