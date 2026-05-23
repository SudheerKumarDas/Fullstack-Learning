import express from 'express';
import notesRoutes from './routes/notesRoutes.js'

const app = express();

app.use(express.json());
app.use("/api/notes",notesRoutes)

const PORT=5000;


app.listen(PORT,()=>{
    console.log(`server has started at port:${PORT}`);
})