import express from "express"

import { userLogin, userRegister, getUserInfo, userLogout } from "../controllers/users.controllers.js";
import { authUser } from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.post("/register",userRegister);
router.post("/login",userLogin);
router.get("/me",authUser,getUserInfo);
router.post("/logout",authUser,userLogout);

export default router;