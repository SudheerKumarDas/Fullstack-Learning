import { Router } from "express";
import { register,login, getMe, refreshToken } from "../controllers/user.controller.js";


const authRouter = Router();

authRouter.post("/register",register);
authRouter.post("/login",login);
authRouter.get("/get-me",getMe);
authRouter.get("/refresh-token",refreshToken)

export default authRouter;