import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title:{
        type:String
    }
})