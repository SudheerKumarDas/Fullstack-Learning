import dotenv from "dotenv";
dotenv.config();

import express from "express";

import connectDB from "./src/config/db.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("email verification");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
