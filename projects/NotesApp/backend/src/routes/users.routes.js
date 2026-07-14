import express from "express"

import { userLogin, userRegister, getUserInfo } from "../controllers/users.controllers.js";

const router = express.Router();

router.post("/register",userRegister);
router.post("/login",userLogin);
router.get("/me/:id",getUserInfo);

export default router;