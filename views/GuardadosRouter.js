const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const GuardadosController = require('../controllers/GuardadosController');

// Nuevo guardado
router.post('/nuevo', auth, GuardadosController.nuevoGuardado);
//http://localhost:3300/guardados/nuevo

// Traer guardados por id
router.get('/usuario/:id', auth, GuardadosController.traeGuardados);
//http://localhost:3300/usuario/13


module.exports = router;