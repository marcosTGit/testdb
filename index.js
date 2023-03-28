const express = require('express'); //import express from 'express'
// variable de entorno


// conectando a bases de datos
const db= require('./config/db');

db.authenticate()
    .then(()=>console.log('============     conectado a la BASE DE DATOS    ============='))
    .catch((error)=>console.log(error))

// // // importando modelo
// require('./models/Usuario');
// db.sync()
    // .then(()=>console.log('============     los modelos se importaron Exito     ==================='))
    // .catch((error)=>console.log(error))


// //crear una app
const app = express();

app.get("/", function (req, res) {
	res.json({msj:"El Servidor esta en linea, conexion exitosa"});
});


// require('dotenv').config({path: 'var.env'})
app.listen(process.env.PORT || 3000, ()=>{
    console.log("SERVIDOR EN LINEA");
});