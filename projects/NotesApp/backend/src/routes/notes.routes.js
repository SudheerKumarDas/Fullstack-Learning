import express from "express";
import { createNotes, getNotes, getANotes, updateNotes } from "../controllers/notes.controllers.js";
import { authUser } from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.post("/",authUser,createNotes);
router.get("/",getNotes);
router.get("/:id",getANotes);
router.patch("/:id",updateNotes)

export default router;