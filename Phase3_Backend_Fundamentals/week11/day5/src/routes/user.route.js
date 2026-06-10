import express from "express";
import bcrypt from "bcryptjs";

import { userLogin, userRegister } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", userRegister );
router.post("/login",userLogin)

export default router;