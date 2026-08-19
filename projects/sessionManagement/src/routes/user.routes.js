import express from "express";

import { userInfo, userLogin, userRegister } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/authenticate.js";

const router = express.Router();

router.post("/register",userRegister);
router.post("/login",userLogin);
router.get("/me",authMiddleware,userInfo);

export default router;