import { Router } from "express";
import { register,login, getMe } from "../controllers/user.controller.js";


const authRouter = Router();

authRouter.post("/register",register);
authRouter.post("/login",login);
authRouter.get("/get-me",getMe);

export default authRouter;