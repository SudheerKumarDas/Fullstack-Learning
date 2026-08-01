import express from "express";
import { userRegister, verifyEmail } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register",userRegister);
router.get("/verify-email",verifyEmail);

export default router;