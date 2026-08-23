import express from "express";

import { userInfo, userLogin, userRegister,userLogout } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/authenticate.js";

const router = express.Router();

router.post("/register",userRegister);
router.post("/login",userLogin);
router.get("/me",authMiddleware,userInfo);
router.post("/logout",authMiddleware,userLogout);

export default router;