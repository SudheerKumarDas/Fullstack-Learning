import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongodb connected successfully");  
        console.log(`${conn.connection.host}`)     
    } catch (error) {
        console.error("error connecting mongodb",error)
    }
}

export default connectDB;