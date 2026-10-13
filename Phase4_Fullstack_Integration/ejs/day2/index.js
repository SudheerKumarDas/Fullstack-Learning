import express from "express";

const app = express();

app.get("/",async(req,res)=>{
    const data = {
        title:"EJS Tags",
        seconds:new Date().getSeconds(),
        items:["apple","banana","cherry"],
        htmlContent:"<strong>This is a html content</strong>"
    }
    res.render("index.ejs",data);
})

app.listen(3000,()=>{
    console.log(`App is listening on port 3000`);
})