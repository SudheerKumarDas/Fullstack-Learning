import express from "express";
const router = express.Router();

import { 
    allUsers,
    addUser,
    getSingleUser,
    updateUser,
    deleteUser
 } from "../controllers/userController";    


//get all users
router.get("/",allUsers)

//add new user
router.post("/", addUser)

//get single user
router.get("/:id",getSingleUser)

//update a user
router.put("/:id",updateUser)

//delete a user
router.delete("/:id",deleteUser)

export default router;