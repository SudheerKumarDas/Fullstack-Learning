import express from "express";

const app = express();

app.use(express.json());

const PORT = 3000;

let users = [
    {id:1, name: "Sudheer"},
    {id: 2 , name : "Alice"},
    {id:3 , name:"Bob"}
]
app.get("/users", (req, res)=>{
    res.json(users);
})

app.get("/users/:id",(req,res)=>{
     const id = parseInt(req.params.id);
     const user = users.find(u => u.id === id);
     if(!user){
        return res.status(404).json({message : "User not found"});
     }
     res.json(user);
});

app.post("/users", (req,res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const newUser = {
        id,
        name
    }
    users.push(newUser);
    res.json(newUser);
})

app.put("/users/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const name = req.body.name;
    const user = users.find(u=> u.id === id);
    if(!user){
        return res.status(404).json({message: "User not found"});
    }
    user.name = name;
    res.json(user);
})

app.delete("/users/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);
    users.splice(index,1);
    res.json({ message : "User deleted successfully"});
})

app.listen(PORT, ()=>{
    console.log(`Server is listening at http://localhost:${PORT}`);
})