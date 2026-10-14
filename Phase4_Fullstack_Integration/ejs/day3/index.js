import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs",{
    message:"Enter your name here"
  })
});

app.post("/submit", (req, res) => {
  const fName = req.body['fName'].trim();
  const lName = req.body['lName'].trim();
  const fullName = fName.concat(lName);
  const strLen = fullName.length;
  res.render("index.ejs",{
    message:`Your name has ${strLen} alphabets`
  })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
