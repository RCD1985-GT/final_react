const express = require('express'); 
const app = express(); 
const cors = require('cors'); 
const db = require('./db.js'); 

const PORT = 3300; // DECLARO ROUTER

const router = require('./router'); 

let corsOptions = {// AQUI SE CONFIGURA LAS OPCIONES DE CORS
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

//Middleware
app.use(express.json()); // LE DICE A APP QUE LE PERMITA LEER FORMATO JSON
app.use(cors(corsOptions));  // LE DICE A APP QUE USE LAS OPCIONES DE CORS "GET,HEAD,PUT,PATCH,POST,DELETE


app.use(router); // LE DICE A APP QUE USE ROUTER


db.then(()=>{ 
    app.listen(PORT, ()=> console.log(`Server on port ${PORT}`)); // AQUI CONECTA EN EL PUERTO 3300
})
.catch((err)=> console.log(err.message));
