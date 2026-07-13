import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import connectDB from "./src/configs/db.js";

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
});
