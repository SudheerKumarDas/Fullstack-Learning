import "dotenv/config";

import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";

import connectDB from "./src/db.js";
import userRoutes from "./src/userRoutes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret:"myrandomsecret",
    resave:false,
    saveUninitialized:false,
    cookie:{
        httpOnly:true,
        secure:false,
        maxAge:60*1000
    }
}))

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on PORT:${PORT}`);
  });
});
