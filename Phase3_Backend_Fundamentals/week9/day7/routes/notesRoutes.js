import express, { Router } from 'express';
import { createNotes, deleteNotes, getAllNotes, updateNotes } from '../controllers/notesControllers.js';

const router = express.Router();

router.get('/', getAllNotes)

router.post("/",createNotes)

router.put("/:id",updateNotes)

router.delete("/:id",deleteNotes)

export default router;