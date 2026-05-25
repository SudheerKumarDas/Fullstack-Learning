import express, { Router } from 'express';
import { createNotes, getNoteById, deleteNotes, getAllNotes, updateNotes } from '../controllers/notesControllers.js';

const router = express.Router();

router.get('/', getAllNotes)

router.get("/:id", getNoteById);

router.post("/",createNotes)

router.put("/:id",updateNotes)

router.delete("/:id",deleteNotes)

export default router;