import express from "express"

import { userRegister } from "./userControllers.js"

const router = express.Router();

router.post("/register",userRegister);

export default router;