import express from 'express';

const app = express();

const day = new Date();
const today = day.getDay();

let dayType,advice;

if(today===0 || today===6){
    dayType="A weekend";
    advice= "It's time to party hard"
}else{
    dayType="A weekday";
    advice="It's time to work hard"
}

app.get("/",async(req,res)=>{
    res.render("index.ejs",{
        dayType:dayType,
        advice:advice
    })
})

app.listen(3000,()=>{
    console.log(`App is listening on port 3000`);
})