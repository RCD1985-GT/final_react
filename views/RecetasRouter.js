
const { Router } = require('express');
const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");
const RecetasController = require('../controllers/RecetasController');




//Registro de una nueva receta 
router.post('/registrarReceta', RecetasController.registraReceta); // MIRAR AUTH Y ISADMIN
//http://localhost:3300/recetas/registrarReceta

//Leer todas las recetas 
router.get('/', RecetasController.traeRecetas);
//http://localhost:3300/recetas

//Leer recetas por tipo...FUNCIONA 
router.get('/:tipo', RecetasController.traeRecetasTipo); // CAMBIAT EL GENERO POR TIPO
//http://localhost:3300/recetas/:tipo




module.exports = router;