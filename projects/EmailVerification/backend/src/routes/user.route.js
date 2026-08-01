import express from "express";
import { resendEmailVerification, userRegister, verifyEmail } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register",userRegister);
router.get("/verify-email",verifyEmail);
router.post("/resend-verification",resendEmailVerification);

export default router;