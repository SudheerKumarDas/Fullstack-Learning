import express from 'express';
import mongoose from 'mongoose';

(async ()=>{
    const connection = await mongoose.connect('mongodb+srv://sudheerdas:sudheerdas@cluster0.cmhf2ht.mongodb.net/backend');
    console.log("Connected to MongoDB");
    console.log("Connection object host:", connection.connection.host);
})()

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const User = mongoose.model('User', userSchema);   

const app = express();

app.use(express.json()); 

app.post('/create-user',async (req,res)=>{
    const user = req.body;
    const createdUser = await User.create(user);
    res.send({
        createdUser
    });
});

app.get('/get-all-users',async (req, res) => {
    const users = await User.find();
    res.send({
        users
    });
});

app.get('/get-single-user', async (req, res)=>{
        const userName = req.query.name;
        const user = await User.findOne({name: userName});
        res.send({
            user
        }); 
});

app.put('/update-user', async (req, res) => {
    console.log("Query received:", req.query);
    console.log("Type of req.query.name:", typeof req.query.name);
    const userName = req.query.name;
    const newName = req.body.name;
    const updatedUser = await User.findOneAndUpdate({name: userName}, {name: newName}, {new: true});
    res.send({
        updatedUser
    });
})

app.delete('/delete-user', async (req, res) => {
    const userName = req.query.name;
    const deletedUser = await User.findOneAndDelete({name: userName});
    res.send({
        deletedUser
    });
});

app.listen(8000,()=>{
    console.log("Server has started at localhost:8000")
}); 
