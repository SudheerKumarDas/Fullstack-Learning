import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Task title is required"],
        trim:true,
        maxlength:[200,"Title should not exceed 200 characters"]
    },
    description:{
        type:String,
        trim:true,
        maxlength:[1000,"Task description should not exceed 1000 characters"],
        default:""
    },
    completed:{
        type:Boolean,
        default:false
    },
    priority:{
        type:String,
        enum:["low","medium","high"],

    },
    dueDate:{
        type:Date,
        default:null
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{
    timestamps:true
})

taskSchema.index({user:1,completed:1});
taskSchema.index({user:1,completed:-1});

const Task = mongoose.model("Task",taskSchema)

export default Task;