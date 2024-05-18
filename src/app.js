const req = require("express/lib/request");
const { required } = require("nodemon/lib/config");

const express = require('express');
const ejs = require('ejs');
const path = require('path');

const port=9000

const app = express();

app.set("view engine", "ejs")
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.render('index',{nombre:"pedro"
    });
});

app.get("/home",(request, response)=>{
    response.send("hola mundo estan ")
})


app.listen(port,()=>{
    console.log(
    `Servidor escuchando en el puerto ${port}`
    )
})