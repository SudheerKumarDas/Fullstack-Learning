import express from 'express';
import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'

dotenv.config();
const app = express();

connectDB()

app.use((req,res,next)=>{
    console.log(`The Req method is ${req.method} and the Req URL is ${req.url}`)
    next();
})

app.use(express.json());
app.use("/api/notes",notesRoutes)

const PORT=5000 || process.env.PORT;


app.listen(PORT,()=>{
    console.log(`server has started at port:${PORT}`);
})