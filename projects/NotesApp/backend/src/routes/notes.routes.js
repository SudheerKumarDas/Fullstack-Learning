import express from "express";
import { createNotes } from "../controllers/notes.controllers.js";
import { authUser } from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.post("/create",authUser,createNotes);

export default router;