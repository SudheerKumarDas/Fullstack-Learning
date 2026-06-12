import mongoose from "mongoose";

const schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const userSchema = new schema({
    name:String,
    email:String,
    password:String
})

const todoSchema = new schema({
    title:String,
    description:String,
    userId:ObjectId
})

export const userModel = mongoose.model("Users",userSchema);
export const todoModel = mongoose.model("Todos",todoSchema);

