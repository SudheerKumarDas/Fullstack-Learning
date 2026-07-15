import express from "express";
import { createNotes, getNotes, getANotes, updateNotes, deleteNotes } from "../controllers/notes.controllers.js";
import { authUser } from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.post("/",authUser,createNotes);
router.get("/",authUser,getNotes);
router.get("/:id",authUser,getANotes);
router.patch("/:id",authUser,updateNotes);
router.delete("/:id",authUser,deleteNotes);

export default router;