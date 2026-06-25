import mongoose from "mongoose";

const connectDB = async (req,res) => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB connected successfully");
    } catch (error) {
        console.error("Error connecting MONGODB");
        process.exit(1);
    }
}

export default connectDB;