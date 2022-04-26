const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const GuardadosController = require('../controllers/GuardadosController');

// Nuevo guardado
router.post('/nuevo', GuardadosController.nuevoGuardado);
//http://localhost:3300/guardados/nuevoGuardado


// // Total de pedidos
// router.get('/totalPedidos', PedidosController.totalPedidos);
// //http://localhost:3300/pedidos/totalPedidos

module.exports = router;