import express from "express"

import Todo from "../models/Todo.js";
import { createTodo, deleteTodo, getAllTodos, updateTodo, getSingleTodo, markTodoAsComplete, markTodoAsNotComplete } from "../controllers/todo.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/create",authUser,createTodo);
router.get("/todos",authUser,getAllTodos);
router.put("/update/:id",authUser, updateTodo);
router.delete("/delete/:id",authUser,deleteTodo);
router.get("/get-single-todo/:id",authUser,getSingleTodo);
router.patch("/:id/complete",authUser,markTodoAsComplete);
router.patch("/:id/not-complete",authUser,markTodoAsNotComplete);

export default router;