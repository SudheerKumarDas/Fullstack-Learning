import express from "express";

import { createMovies, getAllMovies } from "../controllers/movies.controllers.js";

const router = express.Router();

router.post("/",createMovies);
router.get("/",getAllMovies);

export default router;