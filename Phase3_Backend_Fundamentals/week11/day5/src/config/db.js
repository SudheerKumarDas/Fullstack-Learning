import mongoose from "mongoose"

export const connectDB = async (req,res) => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully....")
    } catch (error) {
        console.error("Error connecting database....");
        process.exit(1) //exit when failure
    }
}