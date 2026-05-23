import express from 'express';

const app = express();

const PORT=5000;

app.get('/',(req,res)=>{
    res.status(200).send("you have got 5 books.");
})

app.post("/api/notes",(req,res)=>{
    res.status(201).json({message:"Note created successfully!!"})
})

app.put("/api/notes/:id",(req,res)=>{
    res.status(200).json({message:"Note updated successfully!!"})
})

app.delete("/api/notes/:id",(req,res)=>{
    res.status(200).json({message:"Note deleted successfully!!"})
})

app.listen(PORT,()=>{
    console.log(`server has started at port:${PORT}`);
})