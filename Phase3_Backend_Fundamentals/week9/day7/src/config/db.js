
import mongoose from "mongoose";

export async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB connected successfully!!");
    } catch (error) {
        console.log("Error connecting mongodb");
    }
}