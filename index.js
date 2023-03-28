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
// //cargar public



// seteamos las sesiones ==> 2
app.get("/", function (req, res) {
	res.json({msj:"Hola buen dia"});
});



 
// const host=process.env.HOST || '0.0.0.0';
// const port=process.env.PORT || 3000;

    app.listen(process.env.PORT || 3000, ()=>{
        console.log("SERVIDOR EN LINEA");
    });