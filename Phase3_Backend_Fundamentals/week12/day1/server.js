import express from "express";

import app from "./src/app.js";
import connectDB from "./src/config/database.js";


connectDB();

app.listen(3000,()=>{
    console.log("server has started on port 3000");
})