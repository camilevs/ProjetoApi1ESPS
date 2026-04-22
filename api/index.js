const express = require("express");
const cors= require("cors")
const bodyParser=require("body-parser")

const app= express();
const Port = 5001;


//ROTAS PRODUTO- CREATE

app.get("/teste", req,res=>{
    res.send("Seja Bem-vindo ao Teste!")

})

app.get("/login", req.res =>{
    res.send("Login")
})

app.get("/pefil", req.res =>{
    res.send("Perfil")
})
app.get("/usuario", req.res =>{
    res.send("Usuário")
})



app.listen(Port, ()=>{
    console.log(`Sevidor rodando na Porta,${Port}`);



})
