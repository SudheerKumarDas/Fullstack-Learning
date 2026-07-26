import express from "express";

import { createMovies, getAllMovies, getMovieById, updateMovies } from "../controllers/movies.controllers.js";

const router = express.Router();

router.post("/",createMovies);
router.get("/",getAllMovies);
router.get("/:id",getMovieById);
router.put("/:id",updateMovies);

export default router;