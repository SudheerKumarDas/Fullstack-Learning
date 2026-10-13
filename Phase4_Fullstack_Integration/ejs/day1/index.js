import express from 'express';

const app = express();

app.get("/",async(req,res)=>{
    res.render("index.ejs",{
        dayType:"A weekday",
        advice:"It's time to work hard"
    })
})

app.listen(3000,()=>{
    console.log(`App is listening on port 3000`);
})