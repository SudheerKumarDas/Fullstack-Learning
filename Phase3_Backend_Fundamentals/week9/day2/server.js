import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

let users = [
    { id : 1, name: "Alice"},
    { id : 2, name: "Bob"},
    { id : 3, name: "Charlie"},
    { id : 4, name: "David"},
    { id : 5, name: "Eve"}
];

app.get("/users", (req,res) => {
    res.json(users);
});

app.post("/users", (req,res) => {
    const newUser = {
        id: users.length + 1,
        name : req.query.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});