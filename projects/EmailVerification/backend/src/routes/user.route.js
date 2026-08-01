import express from "express";
import { resendEmailVerification, userLogin, userRegister, verifyEmail } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register",userRegister);
router.get("/verify-email",verifyEmail);
router.post("/resend-verification",resendEmailVerification);
router.post("/login",userLogin);

export default router;