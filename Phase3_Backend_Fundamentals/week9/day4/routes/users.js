import express from "express";
const router = express.Router();

let users =[
    {id:1,name:"Sudheer"},
    {id:2, name:"Samrat"},
    {id:3, name:"Devdas"}
]

//get all users
router.get("/",(req,res)=>{
    res.json(users);
})

//add new user
router.post("/",(req,res)=>{
    const id = users.length + 1;
    const name = req.body.name;
    const newUser = {
        id,
        name
    }
    users.push(newUser);
    res.json(newUser);
})

//get single user
router.get("/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const getUser = users.find(u => u.id === id);
    res.json(getUser);
})

//update a user
router.put("/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const newName = req.body.name;
    const user = users.find(u => u.id === id);
    user.name = newName;
    res.json(user);
})

//delete a user
router.delete("/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const deletedUser = users.find(u=>u.id === id);
    const index = users.findIndex(u => u.id === id);
    users.splice(index, 1);
    res.json(deletedUser);
})

export default router;