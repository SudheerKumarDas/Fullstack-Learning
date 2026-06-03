import express from "express";
import dotenv from "dotenv"

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.post("/api/auth/register", async (req,res) => {
        try {
            const {name, email, password} = req.body;
        } catch (error) {
            
        }
})

app.listen(5000,()=>{
    console.log("Server is listening to the port:5000")
})