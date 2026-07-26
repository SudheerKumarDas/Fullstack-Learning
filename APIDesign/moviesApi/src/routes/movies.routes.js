import express from "express";

import { createMovies, getAllMovies, getMovieById } from "../controllers/movies.controllers.js";

const router = express.Router();

router.post("/",createMovies);
router.get("/",getAllMovies);
router.get("/:id",getMovieById);

export default router;