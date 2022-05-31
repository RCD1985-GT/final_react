
const { Router } = require('express');
const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");
const RecetasController = require('../controllers/RecetasController');

//Registro de una nueva receta 
router.post('/:id', auth, isAdmin, RecetasController.registraReceta); // MIRAR AUTH Y ISADMIN
//http://localhost:3300/registrar

//Leer todas las recetas 
router.get('/', RecetasController.traeRecetas);
//http://localhost:3300/recetas

//Leer recetas por tipo 
router.get('/:tipo', RecetasController.traeRecetasTipo);
//http://localhost:3300/recetas/:tipo



//Modificar receta
// router.put('/modificar', auth, RecetasController.modificarReceta); // CAMBIAR
//http://localhost:3300/modificar // CAMBIAR


//Eliminar receta
router.delete('/eliminar/:id', auth, RecetasController.eliminaRecetaId);
//http://localhost:3300/eliminar/id // CAMBIAR




module.exports = router;