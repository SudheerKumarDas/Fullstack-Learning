import express from express;

import { createMovies } from "../controllers/movies.controllers.js";

const router = express.Router();

router.post("/",createMovies);

export default router;