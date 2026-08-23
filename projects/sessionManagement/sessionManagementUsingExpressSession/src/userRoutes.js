import express from "express"

import { userInfo, userLogin, userRegister } from "./userControllers.js"
import { authMiddleware } from "./authMiddleware.js";

const router = express.Router();

router.post("/register",userRegister);
router.post("/login",userLogin);
router.get("/me",authMiddleware,userInfo);

export default router;