import express from "express"
import { userLogin, userRegister, userInfo } from "../controllers/user.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register",userRegister);
router.post("/login",userLogin);
router.get("/me",authUser,userInfo);

export default router;