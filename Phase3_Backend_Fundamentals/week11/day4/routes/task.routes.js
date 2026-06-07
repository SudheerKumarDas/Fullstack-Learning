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