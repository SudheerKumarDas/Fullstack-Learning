import express from "express"

import Todo from "../models/Todo.js";
import { createTodo, getAllTodos } from "../controllers/todo.controller.js";

const router = express.Router();

router.post("/create",createTodo);
router.get("/todos",getAllTodos);

export default router;