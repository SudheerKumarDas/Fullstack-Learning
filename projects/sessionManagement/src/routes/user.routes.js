import express from "express";

const router = express.Router();

router.post("/register",userRegister);

export default router;