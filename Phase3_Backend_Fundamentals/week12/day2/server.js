const express = require("express")
const session = require("express-session")

const app = express();

app.use(session({
    secret:"my-secret-key",
    resave:true,
    saveUninitialized:true
}))

app.get("/",function(req,res){
    req.session.name = 'Sudheer'
    return res.send("Session Set")
})

app.get("/session",function(req,res){
    var name = req.session.name;
    return res.send(name);
})

app.listen(3000);