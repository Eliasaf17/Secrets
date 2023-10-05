//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser"

var validPassword = false;
const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:true}));

function checkPassword(req, res, next){
    if(req.body.password == "ILoveProgramming"){
        validPassword = true;
    }
    next();
}

app.use(checkPassword);

app.get("/", (req, res) =>{
    res.sendFile(__dirname+"/public/index.html");
});

app.post("/check", (req, res)=>{
    if(validPassword == true){
        res.sendFile(__dirname+"/public/secret.html");
    }else{
        res.redirect("/");
    }
});

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});