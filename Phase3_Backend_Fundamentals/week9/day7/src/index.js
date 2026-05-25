import express from 'express';
import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'
import rateLimiter from './middlewares/rateLimiter.js';

dotenv.config();
const app = express();

app.use((req,res,next)=>{
    console.log(`The Req method is ${req.method} and the Req URL is ${req.url}`)
    next();
})

app.use(express.json());
app.use(rateLimiter)

app.use("/api/notes",notesRoutes)

const PORT=5000 || process.env.PORT;

//this is done because once database gets connected then only our app starts
connectDB().then(()=>{
        app.listen(PORT,()=>{
        console.log(`server has started at port:${PORT}`);
    })
})
    

