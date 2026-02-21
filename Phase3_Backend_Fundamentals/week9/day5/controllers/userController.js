let users =[
    {id:1,name:"Sudheer"},
    {id:2, name:"Samrat"},
    {id:3, name:"Devdas"}
]

//get all users
export const allUsers = (req,res) => {
    res.json(users);
}

// add a new user
export const addUser = (req,res) => {
    const id = users.length + 1;
    const name = req.body.name;
    const newUser = {
        id,
        name
    }
    users.push(newUser);
    res.json(newUser);
}

// get single user
export const getSingleUser = (req,res)=>{
    const id = parseInt(req.params.id);
    const getUser = users.find(u => u.id === id);
    res.json(getUser);
}

// update a user
export const updateUser = (req,res)=>{
    const id = parseInt(req.params.id);
    const newName = req.body.name;
    const user = users.find(u => u.id === id);
    user.name = newName;
    res.json(user);
}

//delete a user
export const deleteUser = (req,res)=>{
    const id = parseInt(req.params.id);
    const deletedUser = users.find(u=>u.id === id);
    const index = users.findIndex(u => u.id === id);
    users.splice(index, 1);
    res.json(deletedUser);
}