import express from "express"

import Todo from "../models/Todo.js";
import { createTodo, deleteTodo, getAllTodos, updateTodo, getSingleTodo } from "../controllers/todo.controller.js";

const router = express.Router();

router.post("/create",createTodo);
router.get("/todos",getAllTodos);
router.put("/update/:id",updateTodo);
router.delete("/delete/:id",deleteTodo);
router.get("/get-single-todo/:id",getSingleTodo);

export default router;