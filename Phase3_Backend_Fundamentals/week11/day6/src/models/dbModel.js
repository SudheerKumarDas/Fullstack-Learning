import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const userSchema = new Schema({
    name:String,
    email:String,
    password:String
})

const todoSchema = new Schema({
    title:String,
    description:String,
    userId:ObjectId
})

export const userModel = mongoose.model("Users",userSchema);
export const todoModel = mongoose.model("Todos",todoSchema);

