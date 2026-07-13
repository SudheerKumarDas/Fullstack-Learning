import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB is connected successfully...`);
    } catch (error) {
        console.error(`Error connecting database ${error}`);
        process.exit(1);
    }
}

export default connectDB;